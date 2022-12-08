import { Home } from 'pages'

export type DefaultRoutesProps = {
  path: string
  element: any
  exact?: boolean
  routes?: DefaultRoutesProps[]
  meta?: any
}

export enum Routes {
  HOME = '/',
}

export const defaultRoutes: DefaultRoutesProps[] = [
  {
    path: Routes.HOME,
    element: <Home />,
    exact: true,
    meta: {
      title: 'Home',
      requiresAuth: true,
    },
  },
]
