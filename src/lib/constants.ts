import type { z } from 'astro/zod';
import MetaDefaultImage from '@/assets/images/meta-default.jpg';
import avatar from '@/assets/images/avatar.jpeg';
import type { seoSchemaWithoutImage } from '@/content.config';
import astroConfig from 'astro.config.mjs';

export type AuthorInfo = {
  name: string;
  avatar: any;
  headline: string;
  username?: string;
  location?: string;
  pronouns?: string;
}

export type Seo = z.infer<typeof seoSchemaWithoutImage> & {
  image?: any;
}

type DefaultConfigurationType = {
  baseUrl: string,
  author: AuthorInfo;
  seo: Seo;
}

export const DEFAULT_CONFIGURATION: DefaultConfigurationType = {
  baseUrl: astroConfig.site || 'https://www.johnnieyu.com',
  author: {
    avatar,
    name: 'Johnnie Yu (俞润中)',
    headline: 'Investor @ Listen',
    username: 'johnnieyu.com',
    location: 'New York',
    pronouns: 'He/Him',
  },
  seo: {
    title: 'Johnnie Yu (俞润中)',
    description: '  description: Hi, I\'m Johnnie Yu, a twenty-something year old consumer investor and self-proclaimed brand nerd and futurist, currently living and working in New York City.
',
    type: 'website',
    image: MetaDefaultImage,
    twitter: {
      creator: '@johnnieryu'
    },
    robots: 'index, follow',
  }
};