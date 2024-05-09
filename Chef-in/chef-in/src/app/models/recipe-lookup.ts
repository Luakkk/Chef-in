export class RecipeLookupRequest {
  type: string;
  uri: string[];
  app_id: string;
  app_key: string;
  // Optional parameter
  fields?: string;

  constructor(
    type: string = '',
    uri: string[] = [],
    app_id: string = '',
    app_key: string = '',
    fields: string = ''
  ) {
    this.type = type;
    this.uri = uri;
    this.app_id = app_id;
    this.app_key = app_key;
    this.fields = fields;
  }
}
