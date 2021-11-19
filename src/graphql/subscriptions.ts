/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTask = /* GraphQL */ `
  subscription OnCreateTask($owner: String!) {
    onCreateTask(owner: $owner) {
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
export const onUpdateTask = /* GraphQL */ `
  subscription OnUpdateTask($owner: String!) {
    onUpdateTask(owner: $owner) {
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
export const onDeleteTask = /* GraphQL */ `
  subscription OnDeleteTask($owner: String!) {
    onDeleteTask(owner: $owner) {
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
export const onCreateTaskList = /* GraphQL */ `
  subscription OnCreateTaskList($owner: String!) {
    onCreateTaskList(owner: $owner) {
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
export const onUpdateTaskList = /* GraphQL */ `
  subscription OnUpdateTaskList($owner: String!) {
    onUpdateTaskList(owner: $owner) {
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
export const onDeleteTaskList = /* GraphQL */ `
  subscription OnDeleteTaskList($owner: String!) {
    onDeleteTaskList(owner: $owner) {
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
