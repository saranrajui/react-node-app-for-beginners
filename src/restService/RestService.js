import React, { useState } from 'react'
import Observeable, { Subject } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

import { ToastContainer, toast } from 'react-toastify';
import axios, { AxiosRequestConfig } from 'axios'
import { APIS, API_KEY, BASE_URL, HOST, OPTIONS } from '../shared/Constants'
import MessageService from '../shared/MessageService';
export const showToasterAsSubject = new Subject();


class RestService {
    constructor() {
        this.get = this.get.bind(this);
        this.getAllPosts = this.getAllPosts.bind(this);
        this.hello = this.hello.bind(this);
        this.showToasterAsSubject = new BehaviorSubject(false);
    }


    getAllPosts = async () => {
        return await axios.get(`http://localhost:4002/${APIS.allPosts}`)
            .then((response) => response)
            .catch((error) => error)
    }

    get = async (path, args, options) => {

        const url = path ? BASE_URL + path : BASE_URL;
        const _options = {
            url,
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': API_KEY,
                'X-RapidAPI-Host': HOST,
            }
        }
        try {
            console.log("[INFO] Executing REST GET with ", url);
            return await axios.get(_options);
        } catch (error) {
            console.log("[Error in REST API]", error?.message ? error.message : JSON.stringify(error))
        }
    }

    hello = async () => {
        return await axios.get("http://localhost:4002/hello")
        .then((response) => response)
        .catch((error) => this.handleError(error));
    }

    handleError = (error) => {
        if(error) {
            const {code, message, response: { status }}  = error;
            MessageService.sendMessage(true)
            console.log("error occured ==>", code, message, status);
        }
    }
}

export default RestService