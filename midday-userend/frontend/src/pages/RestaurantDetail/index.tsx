import React, { useEffect } from 'react';
import { Dispatch, AnyAction, bindActionCreators } from 'redux';
import { Text, ImageBackground, StyleSheet, View, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';

import { State } from '../../models';
import { getSelectedRestaurant } from '../../redux/actions/restaurantAction';
import { connect } from 'react-redux';
import colors from '../../../colors';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import Icon from 'react-native-vector-icons/Ionicons';
import TimePicker from '../../components/TimePicker';
import { checkSelectedHour, handleConfirm } from '../../utils';
import availableHours from '../../constants/availableHours';

const styles = StyleSheet.create({
  container: {
    width: '90%',
    flex: 1,
    alignSelf: 'center',
    alignItems: 'center',
    paddingTop: 20,
    position: 'relative'
  },
  imageContainer: {
    width: '100%',
    height: 200,
    borderRadius: 15,
    position: 'relative',
    borderColor: 'black',
    borderWidth: 1,
    overflow: 'hidden'
  },
  image: {
    height: '100%',
    width: '100%',
    borderRadius: 15,
    position: 'relative'
  },
  topContainer: {
    width: '100%',
    height: 40,
    paddingLeft: 15,
    paddingRight: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.transparentGray
  },
  bottomContainer: {
    width: '100%',
    height: 40,
    paddingLeft: 15,
    paddingRight: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.transparentGray,
    position: 'absolute',
    top: 160
  },
  day: {
    marginTop: 20,
    width: '100%',
    height: 70,
    borderRadius: 15,
    padding: 10,
    alignItems: 'center'
  },
  calendar: {
    position: 'absolute',
    left: 70,
    top: 320
  },
  touchable: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    zIndex: 0
  },
  bigFont: {
    fontSize: 18,
    marginBottom: 10
  },
  calendarIconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    position: 'relative'
  },
  calendarIcon: {
    fontSize: 30,
    position: 'absolute',
    left: 180,
    top: -35
  },
  bookingDetails: {
    marginTop: 40,
    height: 100,
    width: '100%',
    borderColor: colors.green,
    borderWidth: 1,
    borderRadius: 15,
    position: 'absolute',
    top: 600
  },
  time: {
    fontSize: 15,
    width: '100%',
    height: 30
  },
  timeContainer: {
    position: 'absolute',
    left: 220,
    top: -35
  },
  confirm: {
    marginTop: 10,
    width: 100,
    height: 40,
    backgroundColor: colors.green,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15
  },
  confirmContainer: {
    position: 'relative',
    top: 400,
    left: 130

  },
  hourModal: {
    borderRadius: 15,
    height: 60,
    width: '100%',
    backgroundColor: colors.gray,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    position: 'absolute',
    left: -265,
    zIndex: 5
  },
  modalText: {
    textAlign: 'center'
  }
});

function RestaurantDetail ({ route, selectedRestaurant, actions }: any) {
  const [selectedDay, setSelectedDay] = React.useState(new Date().toLocaleDateString('es-ES').replace('/', '-').replace('/', '-'));
  const [calendarModal, setCalendarModal] = React.useState(false);
  const [selectedHour, setSelectedHour] = React.useState('12:00');
  const [wrongHourModal, setWrongHourModal] = React.useState(false);

  const handleConfirmCallback = () => {
    setWrongHourModal(false);
  };

  const { _id } = route.params;
  useEffect(() => {
    actions.getSelectedRestaurant(_id);
  }, []);

  return (

        <View style={styles.container}>
           <TouchableWithoutFeedback testID='calendarUnactive' style={styles.touchable} onPress={() => { setCalendarModal(false); }}><View style={styles.touchable}></View></TouchableWithoutFeedback>
       <View style = {styles.imageContainer} >

            <ImageBackground source= {{ uri: selectedRestaurant.image }} style = {styles.image} >

                <View style={styles.topContainer}>
                <Text>{selectedRestaurant.name}</Text>
                <Text>{selectedRestaurant.category.name}</Text>
                 </View>

                <View style={styles.bottomContainer}>
                  <Text>{`${selectedRestaurant.street}, ${selectedRestaurant.number}`}</Text>
                  <Text >{selectedRestaurant.menuprice} €</Text>
                </View>

            </ImageBackground>

          </View>
          <View style={styles.day}>
            <Text style={styles.bigFont}>Cuando quieres reservar?</Text>
            <View style = {styles.calendarIconContainer}>
              <View style={styles.timeContainer}>
            <TimePicker selectedHour={selectedHour} setSelectedHour= {setSelectedHour}/>
            </View>
            <Text>{selectedDay} a las {selectedHour}</Text>
            <TouchableWithoutFeedback testID='calendar' onPress={() => { setCalendarModal(true); }}><Icon name="calendar-outline" style={styles.calendarIcon}></Icon></TouchableWithoutFeedback>
            </View>
          </View>
          {calendarModal &&
          <View style = {styles.calendar}>
          <Calendar
          onDayPress={({ dateString }) => { setSelectedDay(dateString.split('-').reverse().join('-')); }}

          />
          </View>}
          <View style={styles.confirmContainer}>
            {wrongHourModal &&
            <View style={styles.hourModal}>
              <Text style={styles.modalText}>A las {selectedHour} estamos cerrados, nuestro horario es de 12:00 a 16:00</Text>
            </View>
            }

          <TouchableOpacity style={styles.confirm} onPress={() => handleConfirm(checkSelectedHour(selectedHour, availableHours), setWrongHourModal, handleConfirmCallback) }><Text>Reservar</Text></TouchableOpacity>
          </View>
          </View>
  );
}

function mapStateToProps ({
  restaurants: { selectedRestaurant }
}: {
  restaurants: State['restaurants'];
}) {
  return { selectedRestaurant };
}

function mapDispatchToProps (dispatch: Dispatch<AnyAction>) {
  return { actions: bindActionCreators({ getSelectedRestaurant }, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantDetail);
