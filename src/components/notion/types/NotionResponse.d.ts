export interface Notion {
  object: string
  results: Result[]
  next_cursor: any
  has_more: boolean
  type: string
}

export interface Result {
  object: string
  id: string
  created_time: string
  last_edited_time: string
  created_by: CreatedBy
  last_edited_by: LastEditedBy
  cover: any
  icon: any
  parent: Parent
  archived: boolean
  properties: Properties
  url: string
}

export interface CreatedBy {
  object: string
  id: string
}

export interface LastEditedBy {
  object: string
  id: string
}

export interface Parent {
  type: string
  workspace: boolean
}

export interface Properties {
  title: Title
}

export interface Title {
  id: string
}