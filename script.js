import 'gridstack/dist/gridstack.min.css';
import { GridStack } from 'gridstack';
// THEN to get HTML5 drag&drop
import 'gridstack/dist/h5/gridstack-dd-native';
// OR to get legacy jquery-ui drag&drop (support Mobile touch devices, h5 does not yet)
import 'gridstack/dist/jq/gridstack-dd-jqueryui';
// OR nothing to get static grids (API driven, no user drag&drop)