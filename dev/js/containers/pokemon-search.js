import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import PokemonList from '../containers/pokemon-list';
import PokemonPreview from '../containers/pokemon-preview';
import {activeIndex, pokedexView} from '../actions/actions-index';

class PokemonSearch extends Component {


    render() {

        return(
                  <div className="pokemon-search">
                    <div className="pokemon-list">
                      <PokemonList />
                    </div>

                    <div className="pokeball-spin">
                      <div className="pokeball-div">
                      <div className="pokeball">
                        <div className="o-pokeball"></div>
                      </div>
                      </div>
                    </div>

                    <div className="pokemon-prev">
                      <PokemonPreview />
                    </div>
                  </div>
            );

          }

}

//Takes application state(part of store),
//maps to props in component above
//gives access to this.state.props from store
function mapStateToProps(state){

    return {
        previewIndex: state.previewIndex
      }

}

//Takes action for component and hooks it up
//Similar to above
//Dispatch refers to funciton being called
function matchDispatchToProps(dispatch){

return bindActionCreators({ activeIndex: activeIndex,
                            pokedexView: pokedexView}, dispatch);

    //connect-function
    // prop : action/function
    // dispatch (behind the scenes with redux to call func)

}


export default connect(mapStateToProps, matchDispatchToProps)(PokemonSearch);
// making userlist component aware of mapstatetoprops
// and therefor making it aware of the datastore
