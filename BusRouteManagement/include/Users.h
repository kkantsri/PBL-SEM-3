#ifndef USERS_H
#define USERS_H

#include <string>
#include "Utils.h"

class BusSystem;

class User {
protected:
    std::string userId;
    std::string username;
    std::string password;

public:
    User() = default;
    User(const std::string& id, const std::string& user, const std::string& pass) : userId(id), username(user), password(pass) {}
    virtual ~User() = default;
    
    std::string getUserId() const { return userId; }
    std::string getUsername() const { return username; }
    
    bool authenticate(const std::string& pass) const { return password == pass; }
    
    virtual void displayMenu(BusSystem& system) = 0;
    
    virtual std::string toString() const { return userId + "|" + username + "|" + password; }
};

class Admin : public User {
public:
    Admin() = default;
    Admin(const std::string& id, const std::string& user, const std::string& pass) : User(id, user, pass) {}
    
    void displayMenu(BusSystem& system) override;

    std::string toString() const override { return User::toString(); }
    
    static Admin fromString(const std::string& data) {
        auto tokens = Utils::split(data, '|');
        return Admin(tokens[0], tokens[1], tokens[2]);
    }
};

class Passenger : public User {
private:
    int age;
    std::string gender;

public:
    Passenger() = default;
    Passenger(const std::string& id, const std::string& name, const std::string& pass, int a, const std::string& g)
        : User(id, name, pass), age(a), gender(g) {}
    
    int getAge() const { return age; }
    std::string getGender() const { return gender; }

    void displayMenu(BusSystem& system) override;

    std::string toString() const override {
        return User::toString() + "|" + std::to_string(age) + "|" + gender;
    }
    
    static Passenger fromString(const std::string& data) {
        auto tokens = Utils::split(data, '|');
        return Passenger(tokens[0], tokens[1], tokens[2], std::stoi(tokens[3]), tokens[4]);
    }
};

#endif // USERS_H
