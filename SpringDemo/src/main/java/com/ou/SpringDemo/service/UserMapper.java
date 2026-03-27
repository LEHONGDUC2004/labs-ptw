package com.ou.SpringDemo.service;

import org.springframework.stereotype.Component;

import com.ou.SpringDemo.dto.UserResponse;
import com.ou.SpringDemo.entity.User;

@Component
public class UserMapper {
    public UserResponse toResponse(User user) {
        if(user == null) return null;

        return new UserResponse(
            user.getId(),
            user.getUsername(),
            user.getEmail(),
            user.getRole(),
            user.getFullName(),
            user.getCreatedAt(),
            user.getUpdatedAt()
        );
    }
}