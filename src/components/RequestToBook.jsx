import React from "react";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import {
  IconButton,
  Box,
  Heading,
  Text,
  Link,
  Divider,
  Image,
  InputGroup,
  InputLeftElement,
  Input,
  Button,
} from "@chakra-ui/react";

import { createIcon } from "@chakra-ui/icons";

// OR using the `d` value of a path (the path definition) directly

export const RequestToBook = () => {
  const fontFamily = `-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
  'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
  sans-serif`;
  const travelImage =
    "https://a0.muscache.com/im/pictures/7c586cfa-6a5c-4ec1-8fcd-5890b6a50769.jpg?aki_policy=large";
  const imgRedYellowLogo =
    "https://a0.muscache.com/airbnb/static/packages/assets/frontend/legacy-shared/svgs/payments/logo_mastercard.f18379cf1f27d22abd9e9cf44085d149.svg";
  const visaLogo =
    "https://a0.muscache.com/airbnb/static/packages/assets/frontend/legacy-shared/svgs/payments/logo_visa.0adea522bb26bd90821a8fade4911913.svg";
  const amexLogo =
    "https://a0.muscache.com/airbnb/static/packages/assets/frontend/legacy-shared/svgs/payments/logo_amex.84088b520ca1b3384cb71398095627da.svg";
  const reservationLogo =
    "https://lh3.googleusercontent.com/pw/AM-JKLVcKr25NsC6dHWSQTc47kUDnHbWaKb-pLwERPahue7QqWKrXRK_muJ8oNydYSJYw9-mG4eRIAaZ7VStgxFn1aWpOPpYA8Z71BHYEBhA2iYLhT6V6DsjnpWj99ygYHJtLSIN0FX_9f2yrXBwFuezR2g=w49-h39-no?authuser=0";

  const airLogo =
    "https://a0.muscache.com/pictures/aircover/aircover-logo/original/56683a2f-f11b-43f6-8af7-a1b3861b2c85.svg";
  const CardIcon = createIcon({
    displayName: "UpDownIcon",
    viewBox: "0 0 32 32",
    d: "M29 5a2 2 0 0 1 1.995 1.85L31 7v18a2 2 0 0 1-1.85 1.995L29 27H3a2 2 0 0 1-1.995-1.85L1 25V7a2 2 0 0 1 1.85-1.995L3 5zm0 6H3v14h26zm-3 10a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7-14H3v2h26z",
  });
  return (
    <Box maxWidth="1150px" margin="auto">
      <Box display="flex" gap="10px" margin="30px auto">
        <IconButton backgroundColor="white" icon={<ChevronLeftIcon />} />
        <Heading fontWeight="500" size="lg" fontFamily={fontFamily}>
          Request to book
        </Heading>
      </Box>
      <Box display="flex" justifyContent="space-between">
        <Box width="55%" padding="0px 12px">
          <Heading
            fontWeight="500"
            padding="20px 0px"
            size="md"
            fontFamily={fontFamily}
          >
            Your trip
          </Heading>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box display="flex" flexDirection="column">
              <Box>
                <Heading
                  padding="10px 0px"
                  fontWeight="500"
                  size="sm"
                  fontFamily={fontFamily}
                >
                  Dates
                </Heading>
              </Box>
              <Box>
                <Text color="#222222" fontSize="sm" fontFamily={fontFamily}>
                  28 Jul - 2 Aug
                </Text>
              </Box>
            </Box>
            <Box>
              <Link textDecoration="underline" fontFamily={fontFamily}>
                Edit
              </Link>
            </Box>
          </Box>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            marginBottom="30px"
          >
            <Box display="flex" flexDirection="column">
              <Box>
                <Heading
                  padding="10px 0px"
                  fontWeight="500"
                  size="sm"
                  fontFamily={fontFamily}
                >
                  Guests
                </Heading>
              </Box>
              <Box>
                <Text color="#222222" fontSize="sm" fontFamily={fontFamily}>
                  1 guest
                </Text>
              </Box>
            </Box>
            <Box>
              <Link textDecoration="underline" fontFamily={fontFamily}>
                Edit
              </Link>
            </Box>
          </Box>
          <Divider borderWidth="1px" />
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            margin="20px auto"
          >
            <Heading size="md" fontFamily={fontFamily} fontWeight="500">
              Pay with
            </Heading>
            <Box display="flex" gap="10px" alignItems="center">
              <Image
                boxSize="22px"
                objectFit="contain"
                src={imgRedYellowLogo}
              />
              <Image boxSize="30px" objectFit="contain" src={visaLogo} />
              <Image boxSize="30px" objectFit="contain" src={amexLogo} />
            </Box>
          </Box>
          <InputGroup margin="20px auto">
            <InputLeftElement
              pointerEvents="none"
              children={<CardIcon color="gray.300" />}
            />
            <Input
              fontSize="20px"
              type="number"
              placeholder="Credit or Debit Card"
            />
          </InputGroup>
          <Link textDecoration="underline" fontFamily={fontFamily}>
            Enter a coupon
          </Link>
          <Divider margin="30px auto" borderWidth="1px" />
          <Box>
            <Heading fontFamily={fontFamily} size="md" fontWeight="500">
              Required for your trip
            </Heading>
            <Box display="flex" justifyContent="space-between">
              <Box display="flex" flexDirection="column">
                <Box>
                  <Heading
                    padding="10px 0px"
                    fontWeight="500"
                    size="sm"
                    fontFamily={fontFamily}
                  >
                    Message the host
                  </Heading>
                </Box>
                <Box>
                  <Text color="#222222" fontSize="sm" fontFamily={fontFamily}>
                    Let the host know why you're travelling and when you'll
                    check in
                  </Text>
                </Box>
              </Box>
              <Box>
                <Button variant="outline" colorScheme="black" size="sm">
                  Add
                </Button>
              </Box>
            </Box>
            <Box display="flex" justifyContent="space-between">
              <Box display="flex" flexDirection="column">
                <Box>
                  <Heading
                    padding="10px 0px"
                    fontWeight="500"
                    size="sm"
                    fontFamily={fontFamily}
                  >
                    Phone number
                  </Heading>
                </Box>
                <Box>
                  <Text color="#222222" fontSize="sm" fontFamily={fontFamily}>
                    Add and confirm your phone number to get trip updates
                  </Text>
                </Box>
              </Box>
              <Box>
                <Button variant="outline" colorScheme="black" size="sm">
                  Add
                </Button>
              </Box>
            </Box>
          </Box>
          <Divider borderWidth="1px" margin="30px auto" />
          <Heading
            margin="30px auto"
            fontFamily={fontFamily}
            size="md"
            fontWeight="500"
          >
            Cancellation policy
          </Heading>
          <Text color="#222222" fontSize="sm" fontFamily={fontFamily}>
            This reservation is non-refundable.
            <Link
              color="black"
              textDecoration="underline"
              fontFamily={fontFamily}
            >
              Learn more
            </Link>
          </Text>
          <Divider margin="30px auto" borderWidth="1px" />
          <Box display="flex" justifyContent="center">
            <Box marginRight="20px">
              <Image src={reservationLogo} boxSize="40px" objectFit="cover" />
            </Box>
            <Box display="flex" flexDirection="column" justifyContent="center">
              <Box>
                <Heading fontWeight="500" size="sm" fontFamily={fontFamily}>
                  Your reservation won’t be confirmed until the host accepts
                  your request (within 24 hours).
                </Heading>
              </Box>
              <Box>
                <Text color="#222222" fontSize="sm" fontFamily={fontFamily}>
                  You won’t be charged until then.
                </Text>
              </Box>
            </Box>
          </Box>
          <Divider margin="30px auto" borderWidth="1px" />
          <Text color="#222222" fontSize="xs" fontFamily={fontFamily}>
            By selecting the button below, I agree to the
            <Link
              color="black"
              textDecoration="underline"
              fontFamily={fontFamily}
            >
              {" "}
              Host's House Rules
            </Link>
            ,{" "}
            <Link
              color="black"
              textDecoration="underline"
              fontFamily={fontFamily}
            >
              Airbnb's Rebooking and Refund Policy
            </Link>{" "}
            and that Airbnb can{" "}
            <Link
              color="black"
              textDecoration="underline"
              fontFamily={fontFamily}
            >
              charge my payment method{" "}
            </Link>
            if I’m responsible for damage. I agree to pay the total amount shown
            if the Host accepts my booking request.
          </Text>
          <Button marginTop="30px" colorScheme="red" size="lg">
            Request to book
          </Button>
        </Box>
        <Box
          width="40%"
          height="fit-content"
          border="1px solid lightgrey"
          borderRadius="10px"
          padding="20px"
        >
          <Box display="flex">
            <Box>
              <Image
                borderRadius="10px"
                padding="0"
                width="200px"
                margin="0"
                objectFit="contain"
                src={travelImage}
              />
            </Box>
            <Box paddingLeft="10px">
              <Box>
                <Text color="#222222" fontSize="xs" fontFamily={fontFamily}>
                  Dome
                </Text>
              </Box>
              <Box>
                <Text
                  color="BlackAlpha700"
                  fontSize="15px"
                  fontFamily={fontFamily}
                >
                  Adaaran Club Rannalhi, Maldives, Water Bungalows
                </Text>
              </Box>
            </Box>
          </Box>
          <Divider
            margin="30px auto"
            borderColor="lightgray"
            borderWidth="1px"
          />
          <Box display="flex" alignItems="center">
            <Text color="#222222" fontSize="sm" fontFamily={fontFamily}>
              Your booking is protected by
            </Text>
            <Box paddingLeft="5px">
              <Image src={airLogo} />
            </Box>
          </Box>
          <Divider
            margin="30px auto"
            borderColor="lightgray"
            borderWidth="1px"
          />
          <Heading fontFamily={fontFamily} size="md" fontWeight="500">
            Price Details
          </Heading>
          <Box display="flex" justifyContent="space-between" margin="15px auto">
            <Text color="#222222" fontSize="sm" fontFamily={fontFamily}>
              ₹42,250.84 x 5 nights
            </Text>
            <Text color="#222222" fontSize="sm" fontFamily={fontFamily}>
              ₹2,11,254.2
            </Text>
          </Box>
          <Box display="flex" justifyContent="space-between" margin="15px auto">
            <Text
              textDecoration="underline"
              color="#222222"
              fontSize="sm"
              fontFamily={fontFamily}
            >
              Service fee
            </Text>
            <Text color="#222222" fontSize="sm" fontFamily={fontFamily}>
              ₹29,824.4
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};