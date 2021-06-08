const CLIENT_ID = "SGTBFMMZ3WDD4XFTWKG4IVQUPIG530VPKNO0SGGBEZ2Z32BZ"
const CLIENT_SECRET = "ZAZ2ARLP1ATSJQLKQCIZQ1LRBOVWVSLMZT5PYM5TQMXAXZB1"

export const getLocations = () => {
    fetch(`https://api.foursquare.com/v2/venues/explore?cat=food&ll=40.730610,-73.935242&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&v=20210607`)
        .then(response => response.json())
        .then(result => result.response.groups[0].items);
};