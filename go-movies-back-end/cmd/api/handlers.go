package main

import (
	"backend/internal/models"
	"encoding/json"
	"fmt"
	"net/http"
	"time"
)

type jsonResponse struct {
	Status  string `json:"status"`
	Message string `json:"message"`
	Version string `json:"version"`
}

func (app *appliation) Home(w http.ResponseWriter, r *http.Request) {

	payload := jsonResponse{
		Status:  "active",
		Message: "Go Movies",
		Version: "1.0.0",
	}

	out, err := json.Marshal(payload)
	if err != nil {
		fmt.Println(err)
	}

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	w.Write(out)
}

func (app *appliation) AllMovies(w http.ResponseWriter, r *http.Request) {
	var movies []models.Movie

	rd, _ := time.Parse("2006-01-02", "1986-03-07")

	highlander := models.Movie{
		ID:          1,
		Title:       "Highlander",
		ReleaseDate: rd,
		MPAARating:  "R",
		RunTime:     116,
		Description: "Nice movie",
		CreatedAt:   time.Now(),
		UpdatedAt:   time.Now(),
	}

	movies = append(movies, highlander)

	raiders_of_the_lost_ark := models.Movie{
		ID:          1,
		Title:       "Raiders of the Lost Ark",
		ReleaseDate: rd,
		MPAARating:  "PG-13",
		RunTime:     115,
		Description: "Very family-friendly movie",
		CreatedAt:   time.Now(),
		UpdatedAt:   time.Now(),
	}

	movies = append(movies, raiders_of_the_lost_ark)
}
