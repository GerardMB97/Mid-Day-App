import React, { useEffect } from 'react';
import { Dispatch, AnyAction, bindActionCreators } from 'redux';
import {
  Text,
  ImageBackground,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TextInput
} from 'react-native';

import { State } from '../../models';
import { getSelectedRestaurant } from '../../redux/actions/restaurantActions/restaurantAction';
import { handleInvitation, resetBooking } from '../../redux/actions/bookingActions/bookingActions';
import { connect } from 'react-redux';
import colors from '../../../colors';
import { Calendar } from 'react-native-calendars';
import Icon from 'react-native-vector-icons/Ionicons';
import TimePicker from '../../components/TimePicker';
import { checkSelectedHour, handleConfirm, createBooking, getMonthName, getDay, handleModal } from '../../utils';
import availableHours from '../../constants/availableHours';
import CalendarIcon from '../../components/CalendarIcon';
import Modal from '../../components/Modal';
import modal from '../../constants/modalText';
;

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
  timeContainer: {
    alignItems: 'center'
  },
  titleContainer: {
    marginTop: 20,
    width: '100%',
    height: 30,
    alignItems: 'center'
  },
  iconContainer: {
    width: '100%',
    height: 60,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
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
    left: '20%',
    top: 390,
    zIndex: 5
  },
  touchable: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    zIndex: 0
  },
  bigFont: {
    fontSize: 18
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
    top: 340,
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
  },
  input: {
    width: 50,
    height: 50
  },
  menuIcon: {
    fontSize: 40
  },
  searchBar: {
    width: '100%',
    height: 50,
    backgroundColor: colors.green,
    borderRadius: 10,
    paddingLeft: 20,
    marginTop: -70
  },
  people: {
    position: 'relative'
  },
  more: {
    position: 'absolute',
    top: 0,
    left: -10
  },
  less: {
    position: 'absolute',
    top: 30,
    left: -10
  },
  customers: {
    position: 'absolute',
    left: 50,
    width: 20
  },
  searchContainer: {
    width: '100%',
    position: 'relative',
    zIndex: 10
  },
  invite: {
    position: 'absolute',
    left: '90%',
    top: -60,
    fontSize: 50
  },
  icon: {
    fontSize: 30
  },
  modalInv: {
    position: 'absolute',
    left: -200,
    top: 50
  }
});

function RestaurantDetail ({
  route,
  selectedRestaurant,
  booking,
  user,
  actions,
  navigation
}: any) {
  const [selectedDay, setSelectedDay] = React.useState(
    new Date().toLocaleDateString('es-ES').replace('/', '-').replace('/', '-')
  );

  const [customers, setCustomers] = React.useState(1);
  const [selectedHour, setSelectedHour] = React.useState('12:00');
  const [wrongHourModal, setWrongHourModal] = React.useState(false);
  const [invitationValue, setInvitationValue] = React.useState('');

  const resetBooking = () => {
    setCustomers(1);
    setSelectedHour('12:00');
    setSelectedDay(new Date().toLocaleDateString('es-ES').replace('/', '-').replace('/', '-'));
    actions.resetBooking();
  };

  const handleConfirmCallback = () => {
    setWrongHourModal(false);
  };

  const { _id } = route.params;
  useEffect(() => {
    actions.getSelectedRestaurant(_id);
  }, [booking]);

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageBackground
          source={{ uri: selectedRestaurant.image }}
          style={styles.image}
        >
          <View style={styles.topContainer}>
            <Text>{selectedRestaurant.name}</Text>
            <Text>{selectedRestaurant.category.name}</Text>
          </View>

          <View style={styles.bottomContainer}>
            <Text>{`${selectedRestaurant.street}, ${selectedRestaurant.number}`}</Text>
            <Text>{selectedRestaurant.menuprice} €</Text>
          </View>
        </ImageBackground>
      </View>

      <View style={styles.iconContainer}>

          <View><CalendarIcon month={getMonthName(selectedDay)} day={getDay(selectedDay)}></CalendarIcon></View>
        <View style={styles.people}>

        <Icon style={styles.menuIcon} name="people-outline"></Icon>
          <View style={styles.less}>

            <Text style ={styles.customers}>{customers}</Text>
          </View>
        </View>

        <View style={styles.timeContainer}>
            <TimePicker
              selectedHour={selectedHour}
              setSelectedHour={setSelectedHour}
            />
            <Text>{selectedHour}</Text>
          </View>
           <TouchableWithoutFeedback
        onPress={() => navigation.navigate('RestaurantMenu', { mode: 'normal', bookingId: '1' })}
      >
        <Icon style = {styles.menuIcon} name="restaurant-outline"></Icon>
      </TouchableWithoutFeedback>
      </View>
      <View style={styles.day}>
        <View style={styles.calendarIconContainer}>

        </View>

      </View>
      <View style={styles.searchContainer}>
        <TextInput style={styles.searchBar} placeholder="Con quien te apetece comer hoy?" value={invitationValue} onChangeText={(text) => { setInvitationValue(text); }}></TextInput>
        <View style={styles.invite}>
          <TouchableWithoutFeedback onPress={() => { setInvitationValue(''); actions.handleInvitation(invitationValue, customers, setCustomers, booking); }}>
            <Icon style={styles.icon} name="add-circle-outline"></Icon>
          </TouchableWithoutFeedback>
        </View>
      </View>
        <View style={styles.calendar}>
          <Calendar
            onDayPress={({ dateString }) => {
              setSelectedDay(dateString.split('-').reverse().join('-'));
            }}
          />
        </View>

      <View style={styles.confirmContainer}>
        {wrongHourModal && (
          <View style={styles.hourModal}>
            <Text style={styles.modalText}>
              A las {selectedHour} estamos cerrados, nuestro horario es de 12:00
              a 16:00
            </Text>
          </View>
        )}

        <TouchableOpacity
          style={styles.confirm}
          onPress={() => {
            handleConfirm(
              checkSelectedHour(selectedHour, availableHours),
              setWrongHourModal,
              handleConfirmCallback
            );
            createBooking(
              selectedDay,
              selectedHour,
              user._id,
              customers,
              booking.people,
              selectedRestaurant._id
            );
            resetBooking();
          }}
        >
          <Text>Reservar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function mapStateToProps ({
  restaurants: { selectedRestaurant },
  booking,
  user
}: {
  restaurants: State['restaurants'];
  booking: State['booking'];
  user: State['user'];
}) {
  return { selectedRestaurant, booking, user };
}

function mapDispatchToProps (dispatch: Dispatch<AnyAction>) {
  return { actions: bindActionCreators({ getSelectedRestaurant, handleInvitation, resetBooking }, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantDetail);
