export default function Filter({
    handleFilterChange,
    rating,
    title,
    handleRatingChange,
    handleTitleChange
  }) {
    return (
      <div className="filterBox">
        <select onChange={handleFilterChange}>
          <option value="unfiltered">Filter By</option>
          <option value="rating">Rating</option>
          <option value="title">Title</option>
        </select>
  
        {rating && (
          <select onChange={handleRatingChange}>
            <option value="9">Excellent</option>
            <option value="8">Great Movies</option>
            <option value="5">Nice</option>
          </select>
        )}
  
        {title && (
          <input
            type="text"
            placeholder="Enter movie title"
            onChange={handleTitleChange}
          />
        )}
      </div>
    );
  }
  