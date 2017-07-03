import * as APIUtil from '../util/category_api_util';

export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES';
export const RECEIVE_SINGLE_CATEGORY = 'RECEIVE_SINGLE_CATEGORY';
export const RECEIVE_CATEGORY_EVENT = 'RECEIVE_CATEGORY_EVENT';

//sync actions:
export const receiveCategories = (categories) => ({
  type: RECEIVE_CATEGORIES,
  categories
});

export const receiveSingleCategory = (category) => ({
  type: RECEIVE_SINGLE_CATEGORY,
  category
});

export const receiveCategoryEvent = (event) => ({
  type: RECEIVE_CATEGORY_EVENT,
  event
});

//async actions:
export const fetchCategories = () => (dispatch) => (
  APIUtil.fetchCategories()
    .then(
      (categories) => dispatch(receiveCategories(categories))
    )
);

export const fetchSingleCategory = (id) => (dispatch) => (
  APIUtil.fetchSingleCategory(id)
    .then(
      category => dispatch(receiveSingleCategory(category))
    )
);
