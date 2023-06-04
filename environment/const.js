const BaseURL = "https://api.jikan.moe/v4";
const PathHome = "/anime?type=tv&order_by=end_date&status=completed";
const PathMovie = "/anime?type=movie&order_by=end_date&status=upcoming";
const PathSearch = "/anime?q=";

export default class ENV {
  static Home = BaseURL + PathHome;
  static Movie = BaseURL + PathMovie;
  static Search = BaseURL + PathSearch;
}
