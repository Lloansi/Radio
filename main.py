def on_received_number(receivedNumber):
    if receivedNumber == 1:
        pass
radio.on_received_number(on_received_number)

def on_button_pressed_a():
    radio.send_string("String")
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_received_string(receivedString):
    basic.show_string(receivedString)
radio.on_received_string(on_received_string)

def on_button_pressed_b():
    radio.send_number(randint(1, 6))
input.on_button_pressed(Button.B, on_button_pressed_b)

random_num = randint(1, 6)

def on_forever():
    pass
basic.forever(on_forever)
