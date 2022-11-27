import { /* inject, */ BindingScope, injectable} from '@loopback/core';
import {repository} from '@loopback/repository';
import {Llaves} from '../config/llaves';
import {Persona} from '../models';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {PersonaRepository} from '../repositories';
const generador = require('password-generator');
const cryptoJS = require('crypto-js');
const JWT = require('jsonwebtoken');

@injectable({scope: BindingScope.TRANSIENT})
export class AutenticacionService {
  constructor(
    @repository(PersonaRepository)
    // eslint-disable-next-line @typescript-eslint/naming-convention, @typescript-eslint/no-shadow
    public PersonaRepository: PersonaRepository,
  ) {}

  /*
   * Add service methods here
   */
  GenerarClave() {
    const clave = generador(8, false);
    return clave;
  }

  CifrarClave(clave: string) {
    const claveCifrada = cryptoJS.MD5(clave).toString();
    return claveCifrada;
  }

  IdentificarPersona(usuario: string, clave: string) {
    try {
      const p = this.PersonaRepository.findOne({
        where: {correo: usuario, clave: clave},
      });
      if (p) {
        return p;
      }
      return false;
    } catch {
      return false;
    }
  }

  GenerarTokenJWT(persona: Persona) {
    const token = JWT.sign(
      {
        data: {
          id: persona.id,
          correo: persona.correo,
          nombre: persona.nombres,
        },
      },
      Llaves.claveJWT,
    );
    return token;
  }

  ValidarTokenJWT(token: string) {
    try {
      const datos = JWT.verify(token, Llaves.claveJWT);
      return datos;
    } catch {
      return false;
    }
  }
}
