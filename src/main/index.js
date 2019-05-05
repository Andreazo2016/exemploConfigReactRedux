import React , { Component } from 'react';
import {View , Text,StyleSheet,TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as TodoActions from './../actions/TodoActions';


 class Main extends Component{
    render(){
        return(
            <View style={styles.mainContainer}>
               <Text>{this.props.todos.map( texto => { return <Text>{texto}</Text>})}</Text>
               <TouchableOpacity onPress={() => { this.props.addTodo('Novo texto')}}>
                   <Text>Add </Text>
               </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
});

const mapStateToProps = state =>({
    todos:state.Todo,
});

const mapDispatchToProps = dispatch => bindActionCreators(TodoActions,dispatch);

export default connect(mapStateToProps,mapDispatchToProps)(Main);