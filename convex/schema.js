import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  //Users Table
  users: defineTable({
    name: v.string(),
    tokenIdentifier: v.string(), //clerk userid for authentication
    email: v.string(),
    imageUrl: v.optional(v.string()),

    //onboarding process
    hasCompletedOnBoarding: v.boolean(),
    //loaction
    location: v.optional(
      v.object({
        city: v.string(),
        state: v.optional(v.string()),
        country: v.string(),
      })
    ),
    interests: v.optional(v.array(v.string())), //min 3

    //organiser tracking /subscription
    freeEventsCreated: v.number(), // track free event limit (1 free)

    //timeStamps
    createdAt: v.number(),
    updatedAt: v.number(),
  }).index("by_token", ["tokenIdentifier"]),
});
