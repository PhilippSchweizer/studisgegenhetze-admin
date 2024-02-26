import blockContent from './blockContent'
import tag from './tag'
import post from './post'
import review from './review'
import page from './page'
import author from './author'
import siteSettings from './siteSettings'

import reviewResource from './reviewResource'

const objects = [reviewResource]

export const schemaTypes = [post, review, page, author, tag, blockContent, siteSettings, ...objects]
