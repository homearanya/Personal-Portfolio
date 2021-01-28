const Analytics = require("analytics-node")
const analytics = new Analytics("VGvgQDLsyNjkBJa1RRM14BhwbmJBYNM2")

const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type",
}

exports.handler = async function (event, context, callback) {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 200, // <-- Important!
      headers,
      body: "This was not a POST request!",
    }
  }
  // some error checking:
  if (event.httpMethod !== "POST" || !event.body) {
    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({
        status: "bad-payload",
        message: "Incorrect or incomplete http request",
      }),
    }
  }

  const { eventName, anonymousId } = JSON.parse(event.body)

  analytics.identify(
    {
      anonymousId,
      traits: {
        email: "homearanya@gmail.com",
      },
    },
    (err, batch) => {
      if (err) {
        callback(null, {
          statusCode: 500,
          headers,
          msg: "fail identify",
          body: JSON.stringify(err.message),
        })
      }
      analytics.track(
        {
          anonymousId,
          event: eventName,
          properties: {
            email: "homearanya@gmail.com",
          },
        },
        (err, batch) => {
          if (err) {
            callback(null, {
              statusCode: 500,
              headers,
              msg: "fail track",
              body: JSON.stringify(err.message),
            })
          }
        }
      )
    }
  )
  callback(null, {
    statusCode: 200,
    headers,
    msg: "success",
    body: JSON.stringify("Data successfully submitted to Segment"),
  })
}
