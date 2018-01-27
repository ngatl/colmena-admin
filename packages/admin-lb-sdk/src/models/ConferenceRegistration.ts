/* tslint:disable */

declare var Object: any;
export interface ConferenceRegistrationInterface {
  "id": string;
}

export class ConferenceRegistration implements ConferenceRegistrationInterface {
  "id": string;
  constructor(data?: ConferenceRegistrationInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `ConferenceRegistration`.
   */
  public static getModelName() {
    return "ConferenceRegistration";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of ConferenceRegistration for dynamic purposes.
  **/
  public static factory(data: ConferenceRegistrationInterface): ConferenceRegistration{
    return new ConferenceRegistration(data);
  }
  /**
  * @method getModelDefinition
  * @author Julien Ledun
  * @license MIT
  * This method returns an object that represents some of the model
  * definitions.
  **/
  public static getModelDefinition() {
    return {
      name: 'ConferenceRegistration',
      plural: 'ConferenceRegistrations',
      properties: {
        "id": {
          name: 'id',
          type: 'string'
        },
      },
      relations: {
      }
    }
  }
}
