declare module "flutterwave-node-v3" {
  class Flutterwave {
    constructor(publicKey: string, secretKey: string);

    Payment: {
      create(payload: any): Promise<any>;
    };

    Transaction: {
      verify(options: any): Promise<any>;
    };
  }

  export default Flutterwave;
}