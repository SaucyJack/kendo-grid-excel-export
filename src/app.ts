
export class App {
  message: string = 'Hello World!';
  datasource: kendo.data.DataSource;

  constructor() {
    this.datasource = new kendo.data.DataSource({
      transport: <any> {
        read: (options) => {
          options.success([
            { thing1: 1, name: 'Spidermonkey' },
            { thing1: 2, name: 'Chickenpilgrim' },
            { thing1: 3, name: 'Dogtastic' }
          ]);
        }
      }
    });
  }
}
