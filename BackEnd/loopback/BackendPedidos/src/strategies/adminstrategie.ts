import {AuthenticationStrategy} from '@loopback/authentication';
import {service} from '@loopback/core';
import {HttpErrors} from '@loopback/rest';
import {UserProfile} from '@loopback/security';
import {Request} from 'express';
import parseBearerToken from 'parse-bearer-token';
import {AutenticacionService} from '../services';

export class EstrategiaAdministrador implements AuthenticationStrategy {
  name = 'admin';

  constructor(
    @service(AutenticacionService)
    public servicioAutenticacion: AutenticacionService,
  ) {}

  async authenticate(request: Request): Promise<UserProfile | undefined> {
    const token = parseBearerToken(request);
    if (token) {
      const datos = this.servicioAutenticacion.ValidarTokenJWT(token);
      //Aquí harían la validación dependiendo del rol
      if (datos) {
        const perfil: UserProfile = Object.assign({
          nombre: datos.data.nombre,
        });
        return perfil;
      } else {
        throw new HttpErrors[401]('El token estaba malo');
      }
    } else {
      throw new HttpErrors[401]('No ose incluyó token');
    }
  }
}
