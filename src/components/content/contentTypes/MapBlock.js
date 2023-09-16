function MapBlock({ map_data, numberOfColumns }) {
  console.log("map_data", map_data);
  return (
    // TO DO: mimic class naming structure of TextBlock
    <div
      className={
        // Override width if marked as full width
        map_data.fullWidth
          ? `map-block row full-width _${numberOfColumns}`
          : `map-block row _${numberOfColumns}`
      }
    >
      <h5>
        need to insert a google maps link or map in this location to show where
        the address is this is placeholder text until i figure out how i wanna
        do that
      </h5>
    </div>
  );
}

export default MapBlock;
