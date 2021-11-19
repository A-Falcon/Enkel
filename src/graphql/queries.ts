/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      email
      tasks {
        items {
          id
          title
          status
          notes
          priority
          dueAt
          listId
          userId
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      taskLists {
        items {
          id
          name
          priority
          userId
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        email
        tasks {
          nextToken
        }
        taskLists {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getTask = /* GraphQL */ `
  query GetTask($id: ID!) {
    getTask(id: $id) {
      id
      title
      status
      notes
      priority
      dueAt
      list {
        id
        name
        priority
        tasks {
          nextToken
        }
        user {
          id
          email
          createdAt
          updatedAt
          owner
        }
        userId
        createdAt
        updatedAt
        owner
      }
      listId
      user {
        id
        email
        tasks {
          nextToken
        }
        taskLists {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      userId
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listTasks = /* GraphQL */ `
  query ListTasks(
    $filter: ModelTaskFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTasks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        status
        notes
        priority
        dueAt
        list {
          id
          name
          priority
          userId
          createdAt
          updatedAt
          owner
        }
        listId
        user {
          id
          email
          createdAt
          updatedAt
          owner
        }
        userId
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getTaskList = /* GraphQL */ `
  query GetTaskList($id: ID!) {
    getTaskList(id: $id) {
      id
      name
      priority
      tasks {
        items {
          id
          title
          status
          notes
          priority
          dueAt
          listId
          userId
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      user {
        id
        email
        tasks {
          nextToken
        }
        taskLists {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      userId
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listTaskLists = /* GraphQL */ `
  query ListTaskLists(
    $filter: ModelTaskListFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTaskLists(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        priority
        tasks {
          nextToken
        }
        user {
          id
          email
          createdAt
          updatedAt
          owner
        }
        userId
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
