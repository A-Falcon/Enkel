/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createTask = /* GraphQL */ `
  mutation CreateTask(
    $input: CreateTaskInput!
    $condition: ModelTaskConditionInput
  ) {
    createTask(input: $input, condition: $condition) {
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
export const updateTask = /* GraphQL */ `
  mutation UpdateTask(
    $input: UpdateTaskInput!
    $condition: ModelTaskConditionInput
  ) {
    updateTask(input: $input, condition: $condition) {
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
export const deleteTask = /* GraphQL */ `
  mutation DeleteTask(
    $input: DeleteTaskInput!
    $condition: ModelTaskConditionInput
  ) {
    deleteTask(input: $input, condition: $condition) {
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
export const createTaskList = /* GraphQL */ `
  mutation CreateTaskList(
    $input: CreateTaskListInput!
    $condition: ModelTaskListConditionInput
  ) {
    createTaskList(input: $input, condition: $condition) {
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
export const updateTaskList = /* GraphQL */ `
  mutation UpdateTaskList(
    $input: UpdateTaskListInput!
    $condition: ModelTaskListConditionInput
  ) {
    updateTaskList(input: $input, condition: $condition) {
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
export const deleteTaskList = /* GraphQL */ `
  mutation DeleteTaskList(
    $input: DeleteTaskListInput!
    $condition: ModelTaskListConditionInput
  ) {
    deleteTaskList(input: $input, condition: $condition) {
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
