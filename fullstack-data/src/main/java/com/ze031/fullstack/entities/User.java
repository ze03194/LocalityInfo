package com.ze031.fullstack.entities;

import lombok.Data;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.util.Collection;
import java.util.List;

@Entity
@Data
@Table(name = "USER_TABLE")
public class User implements UserDetails {
    @Id
    private String userName;
    private String firstName;
    private String email;
    private String password;
    private String zipCode;
    private String role;
    private boolean enabled = false;

    @Override
    public String toString() {
        return "User{" + "firstName=" + this.firstName + ", userName=" + this.userName + ", email=" + this.email + ", zipCode=" + this.zipCode + "}";
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of(() -> "read");
    }

    @Override
    public String getUsername() {
        return userName;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }
}
