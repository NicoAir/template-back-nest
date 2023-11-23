import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CatService } from './cat.service';
import { CatDto } from './dto/cat.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('cat')
@Controller('cat')
export class CatController {
  constructor(private readonly catService: CatService) {}

  @Post()
  @ApiOperation({ summary: 'Create cat' })
  create(@Body() createCatDto: CatDto) {
    return this.catService.create(createCatDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all cats' })
  findAll() {
    return this.catService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get one cat' })
  findOne(@Param('id') id: string) {
    return this.catService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update one cat' })
  update(@Param('id') id: string, @Body() updateCatDto: CatDto) {
    return this.catService.update(+id, updateCatDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete one cat' })
  remove(@Param('id') id: string) {
    return this.catService.remove(+id);
  }
}
