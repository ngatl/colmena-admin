/* tslint:disable */

declare var Object: any;
export interface ConferenceReleaseInterface {
  "id": string;
}

export class ConferenceRelease implements ConferenceReleaseInterface {
  "id": string;
  constructor(data?: ConferenceReleaseInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `ConferenceRelease`.
   */
  public static getModelName() {
    return "ConferenceRelease";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of ConferenceRelease for dynamic purposes.
  **/
  public static factory(data: ConferenceReleaseInterface): ConferenceRelease{
    return new ConferenceRelease(data);
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
      name: 'ConferenceRelease',
      plural: 'ConferenceReleases',
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
