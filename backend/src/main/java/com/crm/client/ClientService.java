package com.crm.client;


import org.springframework.stereotype.Service;
@Service
public class ClientService {
    private final ClientRepository repo;

    public ClientService(ClientRepository repo) {
        this.repo = repo;
    }

    public Client create(Client client) {
        if (client == null) {
            throw new IllegalArgumentException("Client cannot be null");
        }
        return repo.save(client);
    }
}