import { Models } from 'appwrite'
import Loader from './Loader'
import GridPostList from './GridPostList'

type DocumentList<T> = {
  documents: T[];
};

type SearchResultsProps = {
    isSearchFetching : boolean,
    searchedPosts: DocumentList<Models.Document> | undefined;
}
const SearchResults = ({isSearchFetching , searchedPosts} : SearchResultsProps) => {
    if(isSearchFetching) return <Loader/>

    if(searchedPosts  &&  searchedPosts?.documents.length > 0) return (
    <GridPostList
        posts={searchedPosts?.documents}
    />
    )
  return (
    <p className='text-light-4 mt-10 text-center w-full'>No results found</p>
  )
}

export default SearchResults