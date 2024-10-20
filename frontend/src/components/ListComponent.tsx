import { ArrowDownOutlined, ArrowUpOutlined, StarFilled, StarOutlined } from '@ant-design/icons';
import { Checkbox, Collapse, List } from 'antd';
import axios from 'axios';
import { MouseEvent, useCallback, useEffect, useState } from 'react';
import { DataType, ListComponentProps } from '../interfaces/nasa';

const { Panel } = Collapse;

export default function ListComponent({ startDate, endDate }: ListComponentProps) {
  const [data, setData] = useState<DataType[]>([]);
  const [favorites, setFavorites] = useState<Record<string, boolean>>({});
  const [showFavorites, setShowFavorites] = useState(false);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  const loadMoreData = useCallback(() => {
    const url = `http://localhost:3030/asteroids/date?startDate=${startDate}&endDate=${endDate}`;

    axios
      .get(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        alert(`Error fetching data: ${error.message}. Remember max range of 7 days`);
      });
  }, [startDate, endDate]);

  useEffect(() => {
    if (startDate && endDate) {
      loadMoreData();
    }
  }, [startDate, endDate, loadMoreData]);

  const handleLinkClick = (e: { stopPropagation: () => void }) => {
    e.stopPropagation();
  };

  const handleStarClick = (e: MouseEvent<HTMLSpanElement>, id: string) => {
    e.stopPropagation();
    setFavorites((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const filteredData = showFavorites ? data.filter((item) => favorites[item.id]) : data;

  const sortedData = filteredData.sort((a, b) => {
    return sortOrder === 'asc' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
  });

  return (
    <div>
      <Checkbox checked={showFavorites} onChange={(e) => setShowFavorites(e.target.checked)}>
        Show Favorites
      </Checkbox>
      <span
        style={{ marginLeft: '10px', cursor: 'pointer' }}
        onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
      >
        Sort by Name {sortOrder === 'asc' ? <ArrowUpOutlined /> : <ArrowDownOutlined />}
      </span>
      <div
        style={{ height: '67vh', overflow: 'auto', padding: '0 16px', border: '1px solid rgba(140, 140, 140, 0.35)' }}
      >
        <List
          dataSource={sortedData}
          renderItem={(item) => (
            <Collapse style={{ marginBottom: '3px', marginTop: '2px' }} defaultActiveKey={[]}>
              <Panel
                key={item.id}
                header={
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      width: '100%',
                      padding: '0px',
                      cursor: 'pointer',
                    }}
                  >
                    <div style={{ textAlign: 'left' }}>
                      <div style={{ fontWeight: 'bold' }}>{item.name}</div>
                      <div style={{ color: 'gray' }}>{item.date.split('T')[0]}</div>
                    </div>
                    <span style={{ textAlign: 'right' }}>
                      <a
                        style={{ paddingRight: '5px' }}
                        target="_blank"
                        rel="noopener noreferrer"
                        href={item.nasa_jpl_url}
                        onClick={handleLinkClick}
                      >
                        🔗 link
                      </a>
                      <span style={{ paddingRight: '5px' }}>
                        {item.is_potentially_hazardous_asteroid ? '🧨' : '✅'}
                      </span>
                      <span
                        onClick={(e) => handleStarClick(e, item.id)}
                        style={{ cursor: 'pointer', paddingRight: '5px' }}
                      >
                        {favorites[item.id] ? <StarFilled style={{ color: 'gold' }} /> : <StarOutlined />}
                      </span>
                    </span>
                  </div>
                }
              >
                <div style={{ padding: '10px', background: '#f7f7f7', margin: 0 }}>
                  <pre
                    style={{
                      whiteSpace: 'pre-wrap',
                      wordWrap: 'break-word',
                      margin: 0,
                      fontSize: '10px',
                      textAlign: 'start',
                    }}
                  >
                    {JSON.stringify(item, null, 2)}
                  </pre>
                </div>
              </Panel>
            </Collapse>
          )}
        />
      </div>
    </div>
  );
}
