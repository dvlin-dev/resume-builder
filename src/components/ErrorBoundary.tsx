import { Component, type ReactNode } from 'react'

interface Props {
  children: ReactNode
}

interface State {
  hasError: boolean
}

export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false }

  static getDerivedStateFromError(): State {
    return { hasError: true }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex h-full items-center justify-center">
          <div className="text-center">
            <p className="mb-4 text-gray-600">出了点问题，请重新加载页面</p>
            <button
              onClick={() => window.location.reload()}
              className="rounded-md bg-gray-800 px-4 py-2 text-sm text-white hover:bg-gray-700"
            >
              重新加载
            </button>
          </div>
        </div>
      )
    }
    return this.props.children
  }
}
