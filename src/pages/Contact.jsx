import React, { forwardRef, useState } from 'react';
import styled from 'styled-components';
import * as colors from '../colors';
import Map from '../components/Map';

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`;

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  gap: 5rem;
`;

const LeftModule = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 50rem) {
    justify-content: center;
  }
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Form = styled.form`
  width: 40rem;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;

  @media only screen and (max-width: 50rem) {
    width: 30rem;
  }
`;

const Input = styled.input`
  padding: 1rem;
  border: none;
  border-radius: 0.5rem;
  background-color: ${colors.primaryColor};
  color: ${colors.blueNovaColor};
`;

const TextArea = styled.textarea`
  padding: 1rem;
  border: none;
  border-radius: 0.5rem;
  background-color: ${colors.primaryColor};
  color: ${colors.blueNovaColor};
`;

const Button = styled.button`
  background-color: ${colors.buttonColor};
  border: none;
  color: ${colors.primaryColor};
  font-weight: bold;
  cursor: pointer;
  border-radius: 0.5rem;
  padding: 1rem;
  z-index: 10;

  &:disabled {
    background-color: ${colors.lightGrayColor};
    cursor: not-allowed;
  }
`;

const RightModule = styled.div`
  flex: 1;

  @media only screen and (max-width: 50rem) {
    display: none;
  }
`;

const Notification = styled.div`
  position: fixed;
  bottom: 0;
  left: 50%;
  background-color: ${colors.buttonColor};
  color: white;
  padding: 15px;
  margin: auto 0;
  border-radius: 4px;
  z-index: 1000;
  display: flex;
  align-items: center;

  .material-icons {
    margin-right: 8px;
  }

  @media only screen and (max-width: 50rem) {
    display: none;
  }
`;

const Contact = forwardRef((props, ref) => {
  const [showNotification, setShowNotification] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const submitHandler = (e) => {
    console.log('submitHandler');
    e.preventDefault();
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 5000);

    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    console.log('handleChange');

    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <Section ref={ref}>
      <Container>
        <LeftModule>
          <Form onSubmit={submitHandler}>
            <Title>Contact Us</Title>
            <Input
              placeholder="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            ></Input>
            <Input
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            ></Input>
            <TextArea
              placeholder="Message"
              name="message"
              rows={10}
              value={formData.message}
              onChange={handleChange}
            ></TextArea>
            <Button
              disabled={
                !formData.name?.length ||
                !formData.email?.length ||
                !formData.message?.length
              }
              type="submit"
            >
              Send
            </Button>
          </Form>
        </LeftModule>
        <RightModule>
          <Map />
        </RightModule>
      </Container>
      {showNotification && (
        <Notification>
          <span className="material-icons">check_circle</span>
          Email sent successfully!
        </Notification>
      )}
    </Section>
  );
});

export default Contact;
