package seminars.third.tdd;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class UserRepositoryTest {

    UserRepository userRepository;
    User firstUser, secondUser, thirdUser;

    @BeforeEach
    void setUp() {
        firstUser = new User("user1", "12345", false);
        secondUser = new User("user2", "12345", true);
        thirdUser = new User("user3", "12345", false);
        userRepository = new UserRepository();
        firstUser.authenticate("user1", "12345");
        secondUser.authenticate("user2", "12345");
        thirdUser.authenticate("user3", "12345");
        userRepository.addUser(firstUser);
        userRepository.addUser(secondUser);
        userRepository.addUser(thirdUser);
    }


    @Test
    void logOutWhenNoAdminRights() {
        assertTrue(userRepository.logOut(firstUser));
        assertTrue(userRepository.logOut(thirdUser));
    }

    @Test
    void noLogOutWhenAdminRights() {
        assertFalse(userRepository.logOut(secondUser));
    }
}