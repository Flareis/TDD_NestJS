import { BadRequestException, Injectable } from '@nestjs/common';

@Injectable()
export class ExchangeService {
  async convertAmount(): Promise<any> {
    if (!from || !to || !amount)
    throw new BadRequestException();
  }
}
