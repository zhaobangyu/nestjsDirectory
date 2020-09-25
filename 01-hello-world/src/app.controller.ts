import { Controller,Get,Post,HttpCode,Header,Redirect,Query,Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  //简单示例
  @Get('Get1')
  Get1(): object {
    //返回对象
    {
      var result = {
        valule:10,
        data:[1,2,3]
      };
      return result;
   }
  }

  //Get正则表达式
  //以上路由地址将匹配 abcd 、 ab_cd 、 abecd 等
  @Get('ab*cd')
  getHello(): string {
    // return this.appService.getHello();
    return "abcd";
  }

  //重定向
  @Get('Get_Redirect1')
  @Redirect('https://www.baidu.com', 301)
  Get2(): string {
    // return this.appService.getHello();
    return "abcd";
  }

  //条件重定向
  @Get('Get_Redirect2')
  @Redirect('https://nestjs.com', 301)
  Get3(@Query('version') version) {
    if (version && version === '5') {
      return { url: 'https://docs.nestjs.com/v5/' };
    }
  }

  //Post示例
  @Post('Post1')
  @HttpCode(204)
  //自定义响应头
  @Header('Cache-Control', 'none')
  postHello(): object {
    //返回对象
    {
       var result = {
         valule:10,
         data:[1,2,3]
       };
       return result;
    }
  }

  //路由参数
  @Get('Get4:id')
  Get4(@Param() params) {
    console.log(params.id);
    return `This action returns a #${params.id} cat`;
  }
  
}
