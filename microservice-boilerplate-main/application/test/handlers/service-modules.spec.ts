import { Type } from '@nestjs/common';
import { NestApplication } from '@nestjs/core';
import { Test } from '@nestjs/testing';

import { AppModule } from '@/app.module';

describe('instantiate service modules', () => {
  const modulesToTest = [AppModule];

  modulesToTest.forEach((appModule) => {
    it(`must instantiate ${appModule.name} module`, async () => {
      expect(await tryToInstantiateModule(appModule)).toBeInstanceOf(
        NestApplication,
      );
    });
  });

  const tryToInstantiateModule = async (classModule: Type<any>) => {
    const module = await Test.createTestingModule({
      imports: [classModule],
    }).compile();

    return module.createNestApplication();
  };
});
