import avatar1 from "../../../src/assets/images/users/user-1.jpg";
import avatar2 from "../../../src/assets/images/users/user-3.jpg";
import avatar3 from "../../../src/assets/images/users/user-4.jpg";
import avatar4 from "../../../src/assets/images/users/user-5.jpg";
import avatar5 from "../../../src/assets/images/users/user-6.jpg";
import avatar6 from "../../../src/assets/images/users/user-7.jpg";
import avatar7 from "../../../src/assets/images/users/user-8.jpg";
import avatar8 from "../../../src/assets/images/users/user-9.jpg";
import avatar9 from "../../../src/assets/images/users/user-10.jpg";

export interface PractitionerDetails {
  id: number;
  name: string;
  avatar: string;
  position: string;
  website: string;
  posts: string;
  followers: string;
  followings: string;
}

const practitioners: PractitionerDetails[] = [
  {
    id: 1,
    name: "Freddie J. Plourde",
    avatar: avatar2,
    position: "Social",
    website: "Rezingo.com",
    posts: "2563",
    followers: "29",
    followings: "1125",
  },
  {
    id: 2,
    name: "Christopher Gallardo",
    avatar: avatar3,
    position: "Environment",
    website: "Rezingo.com",
    posts: "12.7k",
    followers: "65",
    followings: "2184",
  },
  {
    id: 3,
    name: "Joseph M. Rohr",
    avatar: avatar4,
    position: "Intellectual",
    website: "Rezingo.com",
    posts: "1021",
    followers: "25",
    followings: "325",
  },
  {
    id: 4,
    name: "Mark K. Horne",
    avatar: avatar5,
    position: "Occupational",
    website: "Rezingo.com",
    posts: "7845",
    followers: "16",
    followings: "5846",
  },
  {
    id: 5,
    name: "James M. Fonville",
    avatar: avatar6,
    position: "Spiritual",
    website: "Rezingo.com",
    posts: "4851",
    followers: "10",
    followings: "895",
  },
  {
    id: 6,
    name: "Jade M. Walker",
    avatar: avatar7,
    position: "Emmotional",
    website: "Rezingo.com",
    posts: "4560",
    followers: "15",
    followings: "742",
  },

];

export { practitioners };
