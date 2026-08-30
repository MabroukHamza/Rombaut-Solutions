import { Component } from 'react'

class ErrorBoundary extends Component {
  state = { hasError: false }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error, info) {
    console.error('Unhandled error:', error, info)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: '2rem',
          background: '#111',
          color: '#d4a017',
          fontFamily: 'Georgia, Times New Roman, serif',
        }}>
          <h1 style={{ fontSize: '1.25rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1rem' }}>
            Something went wrong
          </h1>
          <p style={{ fontSize: '0.85rem', color: '#a08020', marginBottom: '2rem' }}>
            Please refresh the page. If the problem continues, contact us via WhatsApp.
          </p>
          <button
            onClick={() => window.location.assign('/')}
            style={{ padding: '0.75rem 2rem', background: '#d4a017', color: '#111', fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', border: 'none', cursor: 'pointer', fontWeight: '700' }}
          >
            Back to Home
          </button>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
