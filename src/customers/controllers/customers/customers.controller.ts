import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateCustomerDto } from 'src/customers/dtos/CreateCustomer.dto';
import { CustomersService } from 'src/customers/services/customers/customers.service';

@Controller('customers')
export class CustomersController {
  constructor(private readonly customerService: CustomersService) {}
  @Get()
  getCustomers() {
    return this.customerService.getCustomers();
  }

  @Get('id/:id')
  findCustomersById(@Param('id', ParseIntPipe) id: number) {
    return this.customerService.findCustomersById(id);
  }

  @Post('create')
  @UsePipes(ValidationPipe)
  createCustomers(@Body() createCustomerDto: CreateCustomerDto) {
    return this.customerService.createCustomers(createCustomerDto);
  }
}
