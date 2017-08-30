import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchUsers, fetchMoreUsers } from '../../data/users/actions'
import {
  selectError,
  selectUsers,
  selectLoading,
  selectLoaded,
  selectNextPage,
  selectIsLoadingMore,
} from '../../data/users/selectors'

class UserList extends PureComponent {
  componentWillMount() {
    if (this.props.loaded) {
      return
    }

    this.props.fetchUsers()
  }

  handleLoadMore = () => {
    this.props.fetchMoreUsers()
  }

  render() {
    const { users, loading, error, nextPage, isLoadingMore } = this.props
    if (error) {
      return <div>{error}</div>
    }

    if (loading) {
      return <div>loading</div>
    }

    return (
      <div>
        <ul>{users.map((user, index) => <li key={index}>{user.name}</li>)}</ul>
        {nextPage && (
          <button disabled={isLoadingMore} onClick={this.handleLoadMore}>
            {isLoadingMore ? 'Loading...' : 'Load more'}
          </button>
        )}
      </div>
    )
  }
}

UserList.propTypes = {
  error: PropTypes.string.isRequired,
  fetchMoreUsers: PropTypes.func.isRequired,
  fetchUsers: PropTypes.func.isRequired,
  isLoadingMore: PropTypes.bool.isRequired,
  loaded: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  nextPage: PropTypes.string.isRequired,
  users: PropTypes.array.isRequired,
}

const mapStateToProps = state => ({
  error: selectError(state),
  users: selectUsers(state),
  loading: selectLoading(state),
  loaded: selectLoaded(state),
  nextPage: selectNextPage(state),
  isLoadingMore: selectIsLoadingMore(state),
})

const mapDispatchToProps = {
  fetchUsers,
  fetchMoreUsers,
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList)
