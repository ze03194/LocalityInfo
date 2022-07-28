package com.ze031.fullstack.repositories;

import com.ze031.fullstack.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, String> {
    public User findByUserName(String userName);
}
