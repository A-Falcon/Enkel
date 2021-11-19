/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {
  id?: string | null,
  email: string,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type ModelUserConditionInput = {
  email?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type User = {
  __typename: "User",
  id?: string,
  email?: string,
  tasks?: ModelTaskConnection,
  taskLists?: ModelTaskListConnection,
  createdAt?: string,
  updatedAt?: string,
  owner?: string | null,
};

export type ModelTaskConnection = {
  __typename: "ModelTaskConnection",
  items?:  Array<Task | null > | null,
  nextToken?: string | null,
};

export type Task = {
  __typename: "Task",
  id?: string,
  title?: string,
  status?: Status,
  notes?: string,
  priority?: number,
  dueAt?: string,
  list?: TaskList,
  listId?: string,
  user?: User,
  userId?: string,
  createdAt?: string,
  updatedAt?: string,
  owner?: string | null,
};

export enum Status {
  INACTIVE = "INACTIVE",
  ACTIVE = "ACTIVE",
  COMPLETED = "COMPLETED",
}


export type TaskList = {
  __typename: "TaskList",
  id?: string,
  name?: string,
  priority?: number,
  tasks?: ModelTaskConnection,
  user?: User,
  userId?: string,
  createdAt?: string,
  updatedAt?: string,
  owner?: string | null,
};

export type ModelTaskListConnection = {
  __typename: "ModelTaskListConnection",
  items?:  Array<TaskList | null > | null,
  nextToken?: string | null,
};

export type UpdateUserInput = {
  id: string,
  email?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type DeleteUserInput = {
  id?: string | null,
};

export type CreateTaskInput = {
  id?: string | null,
  title: string,
  status: Status,
  notes: string,
  priority: number,
  dueAt: string,
  listId: string,
  userId: string,
  createdAt?: string | null,
  updatedAt?: string | null,
  taskListId: string,
  taskUserId: string,
};

export type ModelTaskConditionInput = {
  title?: ModelStringInput | null,
  status?: ModelStatusInput | null,
  notes?: ModelStringInput | null,
  priority?: ModelIntInput | null,
  dueAt?: ModelStringInput | null,
  listId?: ModelStringInput | null,
  userId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelTaskConditionInput | null > | null,
  or?: Array< ModelTaskConditionInput | null > | null,
  not?: ModelTaskConditionInput | null,
};

export type ModelStatusInput = {
  eq?: Status | null,
  ne?: Status | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateTaskInput = {
  id: string,
  title?: string | null,
  status?: Status | null,
  notes?: string | null,
  priority?: number | null,
  dueAt?: string | null,
  listId?: string | null,
  userId?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  taskListId?: string | null,
  taskUserId?: string | null,
};

export type DeleteTaskInput = {
  id?: string | null,
};

export type CreateTaskListInput = {
  id?: string | null,
  name: string,
  priority: number,
  userId: string,
  taskListUserId: string,
};

export type ModelTaskListConditionInput = {
  name?: ModelStringInput | null,
  priority?: ModelIntInput | null,
  userId?: ModelIDInput | null,
  and?: Array< ModelTaskListConditionInput | null > | null,
  or?: Array< ModelTaskListConditionInput | null > | null,
  not?: ModelTaskListConditionInput | null,
};

export type UpdateTaskListInput = {
  id: string,
  name?: string | null,
  priority?: number | null,
  userId?: string | null,
  taskListUserId?: string | null,
};

export type DeleteTaskListInput = {
  id?: string | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  email?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items?:  Array<User | null > | null,
  nextToken?: string | null,
};

export type ModelTaskFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  status?: ModelStatusInput | null,
  notes?: ModelStringInput | null,
  priority?: ModelIntInput | null,
  dueAt?: ModelStringInput | null,
  listId?: ModelStringInput | null,
  userId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelTaskFilterInput | null > | null,
  or?: Array< ModelTaskFilterInput | null > | null,
  not?: ModelTaskFilterInput | null,
};

export type ModelTaskListFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  priority?: ModelIntInput | null,
  userId?: ModelIDInput | null,
  and?: Array< ModelTaskListFilterInput | null > | null,
  or?: Array< ModelTaskListFilterInput | null > | null,
  not?: ModelTaskListFilterInput | null,
};

export type CreateUserMutationVariables = {
  input?: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    email: string,
    tasks?:  {
      __typename: "ModelTaskConnection",
      items?:  Array< {
        __typename: "Task",
        id: string,
        title: string,
        status: Status,
        notes: string,
        priority: number,
        dueAt: string,
        listId: string,
        userId: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    taskLists?:  {
      __typename: "ModelTaskListConnection",
      items?:  Array< {
        __typename: "TaskList",
        id: string,
        name: string,
        priority: number,
        userId: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateUserMutationVariables = {
  input?: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    email: string,
    tasks?:  {
      __typename: "ModelTaskConnection",
      items?:  Array< {
        __typename: "Task",
        id: string,
        title: string,
        status: Status,
        notes: string,
        priority: number,
        dueAt: string,
        listId: string,
        userId: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    taskLists?:  {
      __typename: "ModelTaskListConnection",
      items?:  Array< {
        __typename: "TaskList",
        id: string,
        name: string,
        priority: number,
        userId: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteUserMutationVariables = {
  input?: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    email: string,
    tasks?:  {
      __typename: "ModelTaskConnection",
      items?:  Array< {
        __typename: "Task",
        id: string,
        title: string,
        status: Status,
        notes: string,
        priority: number,
        dueAt: string,
        listId: string,
        userId: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    taskLists?:  {
      __typename: "ModelTaskListConnection",
      items?:  Array< {
        __typename: "TaskList",
        id: string,
        name: string,
        priority: number,
        userId: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateTaskMutationVariables = {
  input?: CreateTaskInput,
  condition?: ModelTaskConditionInput | null,
};

export type CreateTaskMutation = {
  createTask?:  {
    __typename: "Task",
    id: string,
    title: string,
    status: Status,
    notes: string,
    priority: number,
    dueAt: string,
    list:  {
      __typename: "TaskList",
      id: string,
      name: string,
      priority: number,
      tasks?:  {
        __typename: "ModelTaskConnection",
        nextToken?: string | null,
      } | null,
      user:  {
        __typename: "User",
        id: string,
        email: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      },
      userId: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    listId: string,
    user:  {
      __typename: "User",
      id: string,
      email: string,
      tasks?:  {
        __typename: "ModelTaskConnection",
        nextToken?: string | null,
      } | null,
      taskLists?:  {
        __typename: "ModelTaskListConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    userId: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateTaskMutationVariables = {
  input?: UpdateTaskInput,
  condition?: ModelTaskConditionInput | null,
};

export type UpdateTaskMutation = {
  updateTask?:  {
    __typename: "Task",
    id: string,
    title: string,
    status: Status,
    notes: string,
    priority: number,
    dueAt: string,
    list:  {
      __typename: "TaskList",
      id: string,
      name: string,
      priority: number,
      tasks?:  {
        __typename: "ModelTaskConnection",
        nextToken?: string | null,
      } | null,
      user:  {
        __typename: "User",
        id: string,
        email: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      },
      userId: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    listId: string,
    user:  {
      __typename: "User",
      id: string,
      email: string,
      tasks?:  {
        __typename: "ModelTaskConnection",
        nextToken?: string | null,
      } | null,
      taskLists?:  {
        __typename: "ModelTaskListConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    userId: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteTaskMutationVariables = {
  input?: DeleteTaskInput,
  condition?: ModelTaskConditionInput | null,
};

export type DeleteTaskMutation = {
  deleteTask?:  {
    __typename: "Task",
    id: string,
    title: string,
    status: Status,
    notes: string,
    priority: number,
    dueAt: string,
    list:  {
      __typename: "TaskList",
      id: string,
      name: string,
      priority: number,
      tasks?:  {
        __typename: "ModelTaskConnection",
        nextToken?: string | null,
      } | null,
      user:  {
        __typename: "User",
        id: string,
        email: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      },
      userId: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    listId: string,
    user:  {
      __typename: "User",
      id: string,
      email: string,
      tasks?:  {
        __typename: "ModelTaskConnection",
        nextToken?: string | null,
      } | null,
      taskLists?:  {
        __typename: "ModelTaskListConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    userId: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateTaskListMutationVariables = {
  input?: CreateTaskListInput,
  condition?: ModelTaskListConditionInput | null,
};

export type CreateTaskListMutation = {
  createTaskList?:  {
    __typename: "TaskList",
    id: string,
    name: string,
    priority: number,
    tasks?:  {
      __typename: "ModelTaskConnection",
      items?:  Array< {
        __typename: "Task",
        id: string,
        title: string,
        status: Status,
        notes: string,
        priority: number,
        dueAt: string,
        listId: string,
        userId: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    user:  {
      __typename: "User",
      id: string,
      email: string,
      tasks?:  {
        __typename: "ModelTaskConnection",
        nextToken?: string | null,
      } | null,
      taskLists?:  {
        __typename: "ModelTaskListConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    userId: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateTaskListMutationVariables = {
  input?: UpdateTaskListInput,
  condition?: ModelTaskListConditionInput | null,
};

export type UpdateTaskListMutation = {
  updateTaskList?:  {
    __typename: "TaskList",
    id: string,
    name: string,
    priority: number,
    tasks?:  {
      __typename: "ModelTaskConnection",
      items?:  Array< {
        __typename: "Task",
        id: string,
        title: string,
        status: Status,
        notes: string,
        priority: number,
        dueAt: string,
        listId: string,
        userId: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    user:  {
      __typename: "User",
      id: string,
      email: string,
      tasks?:  {
        __typename: "ModelTaskConnection",
        nextToken?: string | null,
      } | null,
      taskLists?:  {
        __typename: "ModelTaskListConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    userId: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteTaskListMutationVariables = {
  input?: DeleteTaskListInput,
  condition?: ModelTaskListConditionInput | null,
};

export type DeleteTaskListMutation = {
  deleteTaskList?:  {
    __typename: "TaskList",
    id: string,
    name: string,
    priority: number,
    tasks?:  {
      __typename: "ModelTaskConnection",
      items?:  Array< {
        __typename: "Task",
        id: string,
        title: string,
        status: Status,
        notes: string,
        priority: number,
        dueAt: string,
        listId: string,
        userId: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    user:  {
      __typename: "User",
      id: string,
      email: string,
      tasks?:  {
        __typename: "ModelTaskConnection",
        nextToken?: string | null,
      } | null,
      taskLists?:  {
        __typename: "ModelTaskListConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    userId: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type GetUserQueryVariables = {
  id?: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    email: string,
    tasks?:  {
      __typename: "ModelTaskConnection",
      items?:  Array< {
        __typename: "Task",
        id: string,
        title: string,
        status: Status,
        notes: string,
        priority: number,
        dueAt: string,
        listId: string,
        userId: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    taskLists?:  {
      __typename: "ModelTaskListConnection",
      items?:  Array< {
        __typename: "TaskList",
        id: string,
        name: string,
        priority: number,
        userId: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items?:  Array< {
      __typename: "User",
      id: string,
      email: string,
      tasks?:  {
        __typename: "ModelTaskConnection",
        nextToken?: string | null,
      } | null,
      taskLists?:  {
        __typename: "ModelTaskListConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetTaskQueryVariables = {
  id?: string,
};

export type GetTaskQuery = {
  getTask?:  {
    __typename: "Task",
    id: string,
    title: string,
    status: Status,
    notes: string,
    priority: number,
    dueAt: string,
    list:  {
      __typename: "TaskList",
      id: string,
      name: string,
      priority: number,
      tasks?:  {
        __typename: "ModelTaskConnection",
        nextToken?: string | null,
      } | null,
      user:  {
        __typename: "User",
        id: string,
        email: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      },
      userId: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    listId: string,
    user:  {
      __typename: "User",
      id: string,
      email: string,
      tasks?:  {
        __typename: "ModelTaskConnection",
        nextToken?: string | null,
      } | null,
      taskLists?:  {
        __typename: "ModelTaskListConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    userId: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListTasksQueryVariables = {
  filter?: ModelTaskFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTasksQuery = {
  listTasks?:  {
    __typename: "ModelTaskConnection",
    items?:  Array< {
      __typename: "Task",
      id: string,
      title: string,
      status: Status,
      notes: string,
      priority: number,
      dueAt: string,
      list:  {
        __typename: "TaskList",
        id: string,
        name: string,
        priority: number,
        userId: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      },
      listId: string,
      user:  {
        __typename: "User",
        id: string,
        email: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      },
      userId: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetTaskListQueryVariables = {
  id?: string,
};

export type GetTaskListQuery = {
  getTaskList?:  {
    __typename: "TaskList",
    id: string,
    name: string,
    priority: number,
    tasks?:  {
      __typename: "ModelTaskConnection",
      items?:  Array< {
        __typename: "Task",
        id: string,
        title: string,
        status: Status,
        notes: string,
        priority: number,
        dueAt: string,
        listId: string,
        userId: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    user:  {
      __typename: "User",
      id: string,
      email: string,
      tasks?:  {
        __typename: "ModelTaskConnection",
        nextToken?: string | null,
      } | null,
      taskLists?:  {
        __typename: "ModelTaskListConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    userId: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListTaskListsQueryVariables = {
  filter?: ModelTaskListFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTaskListsQuery = {
  listTaskLists?:  {
    __typename: "ModelTaskListConnection",
    items?:  Array< {
      __typename: "TaskList",
      id: string,
      name: string,
      priority: number,
      tasks?:  {
        __typename: "ModelTaskConnection",
        nextToken?: string | null,
      } | null,
      user:  {
        __typename: "User",
        id: string,
        email: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      },
      userId: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreateTaskSubscriptionVariables = {
  owner?: string,
};

export type OnCreateTaskSubscription = {
  onCreateTask?:  {
    __typename: "Task",
    id: string,
    title: string,
    status: Status,
    notes: string,
    priority: number,
    dueAt: string,
    list:  {
      __typename: "TaskList",
      id: string,
      name: string,
      priority: number,
      tasks?:  {
        __typename: "ModelTaskConnection",
        nextToken?: string | null,
      } | null,
      user:  {
        __typename: "User",
        id: string,
        email: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      },
      userId: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    listId: string,
    user:  {
      __typename: "User",
      id: string,
      email: string,
      tasks?:  {
        __typename: "ModelTaskConnection",
        nextToken?: string | null,
      } | null,
      taskLists?:  {
        __typename: "ModelTaskListConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    userId: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateTaskSubscriptionVariables = {
  owner?: string,
};

export type OnUpdateTaskSubscription = {
  onUpdateTask?:  {
    __typename: "Task",
    id: string,
    title: string,
    status: Status,
    notes: string,
    priority: number,
    dueAt: string,
    list:  {
      __typename: "TaskList",
      id: string,
      name: string,
      priority: number,
      tasks?:  {
        __typename: "ModelTaskConnection",
        nextToken?: string | null,
      } | null,
      user:  {
        __typename: "User",
        id: string,
        email: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      },
      userId: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    listId: string,
    user:  {
      __typename: "User",
      id: string,
      email: string,
      tasks?:  {
        __typename: "ModelTaskConnection",
        nextToken?: string | null,
      } | null,
      taskLists?:  {
        __typename: "ModelTaskListConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    userId: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteTaskSubscriptionVariables = {
  owner?: string,
};

export type OnDeleteTaskSubscription = {
  onDeleteTask?:  {
    __typename: "Task",
    id: string,
    title: string,
    status: Status,
    notes: string,
    priority: number,
    dueAt: string,
    list:  {
      __typename: "TaskList",
      id: string,
      name: string,
      priority: number,
      tasks?:  {
        __typename: "ModelTaskConnection",
        nextToken?: string | null,
      } | null,
      user:  {
        __typename: "User",
        id: string,
        email: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      },
      userId: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    listId: string,
    user:  {
      __typename: "User",
      id: string,
      email: string,
      tasks?:  {
        __typename: "ModelTaskConnection",
        nextToken?: string | null,
      } | null,
      taskLists?:  {
        __typename: "ModelTaskListConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    userId: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateTaskListSubscriptionVariables = {
  owner?: string,
};

export type OnCreateTaskListSubscription = {
  onCreateTaskList?:  {
    __typename: "TaskList",
    id: string,
    name: string,
    priority: number,
    tasks?:  {
      __typename: "ModelTaskConnection",
      items?:  Array< {
        __typename: "Task",
        id: string,
        title: string,
        status: Status,
        notes: string,
        priority: number,
        dueAt: string,
        listId: string,
        userId: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    user:  {
      __typename: "User",
      id: string,
      email: string,
      tasks?:  {
        __typename: "ModelTaskConnection",
        nextToken?: string | null,
      } | null,
      taskLists?:  {
        __typename: "ModelTaskListConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    userId: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateTaskListSubscriptionVariables = {
  owner?: string,
};

export type OnUpdateTaskListSubscription = {
  onUpdateTaskList?:  {
    __typename: "TaskList",
    id: string,
    name: string,
    priority: number,
    tasks?:  {
      __typename: "ModelTaskConnection",
      items?:  Array< {
        __typename: "Task",
        id: string,
        title: string,
        status: Status,
        notes: string,
        priority: number,
        dueAt: string,
        listId: string,
        userId: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    user:  {
      __typename: "User",
      id: string,
      email: string,
      tasks?:  {
        __typename: "ModelTaskConnection",
        nextToken?: string | null,
      } | null,
      taskLists?:  {
        __typename: "ModelTaskListConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    userId: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteTaskListSubscriptionVariables = {
  owner?: string,
};

export type OnDeleteTaskListSubscription = {
  onDeleteTaskList?:  {
    __typename: "TaskList",
    id: string,
    name: string,
    priority: number,
    tasks?:  {
      __typename: "ModelTaskConnection",
      items?:  Array< {
        __typename: "Task",
        id: string,
        title: string,
        status: Status,
        notes: string,
        priority: number,
        dueAt: string,
        listId: string,
        userId: string,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    user:  {
      __typename: "User",
      id: string,
      email: string,
      tasks?:  {
        __typename: "ModelTaskConnection",
        nextToken?: string | null,
      } | null,
      taskLists?:  {
        __typename: "ModelTaskListConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    userId: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};
