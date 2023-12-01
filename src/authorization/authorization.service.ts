import { Injectable } from "@nestjs/common";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { AuthorizationRepository } from "./authorization.repository";

@Injectable()
export class AuthorizationService {
  constructor(private AuthorizationRepository: AuthorizationRepository) {}
}
