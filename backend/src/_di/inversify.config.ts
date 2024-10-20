import { Container } from 'inversify';
import { AsteroidOrchestrator } from '../core/orchestrators/asteroids.orchestrator.js';
import { AsteroidsInterfaceIncoming } from '../core/ports/incoming/asteroids.interface.incoming.js';
import { NasaInterfaceOutgoing } from '../core/ports/outgoing/nasa.interface.outgoing.js';
import { AsteroidsInterfaceUsecase } from '../core/usecases/asteroids.interface.usecase.js';
import { AsteroidsUsecase } from '../core/usecases/asteroids.usecase.js';
import { NasaApi } from '../infrastructure/api/nasa.api.js';
import { TYPES } from './types.js';

const container = new Container();

// APPLICATION
// CORE
// -- PORTS
// ---- INCOMING
container.bind<AsteroidsInterfaceIncoming>(TYPES.asteroidsInterfaceIncoming).to(AsteroidOrchestrator);
// ---- OUTGOING
container.bind<NasaInterfaceOutgoing>(TYPES.nasaInterfaceOutgoing).to(NasaApi);
// -- USECASES
container.bind<AsteroidsInterfaceUsecase>(TYPES.asteroidsInterfaceUsecase).to(AsteroidsUsecase);
// INFRASTRUCTURE

export { container };
