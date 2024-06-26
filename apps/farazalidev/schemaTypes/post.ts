/* eslint-disable import/no-default-export -- unknown*/
/* eslint-disable @typescript-eslint/no-unsafe-assignment -- unknown */
import type {SlugifierFn} from 'sanity'
import {defineField, defineType} from 'sanity'
import {slugify} from '../utils/slugify'

const slugifyFn: SlugifierFn = (input) => {
  const slug = slugify(input)
  const currentid = document.location.href.split(';')[1].slice(0, 36)
  return `${slug};${currentid}`
}

export default defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
        slugify: slugifyFn,
      },
    }),
    defineField({
      name: 'summary',
      type: 'string',
      title: 'summary',
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: {type: 'author'},
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    }),
    defineField({
      name: 'md',
      type: 'markdown',
      title: 'markdown',
      placeholder: '## Body',
    }),
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  },
})
