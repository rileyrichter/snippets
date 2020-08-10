// All of this code is copied from the Memberstack API Sandbox in their docs at https://docs.memberstack.com/

// Add your API key here.
const API_KEY = "...";
const FREE_PLAN_ID = "...";
const USER_ID_TO_FETCH = "...";
const USER_ID_TO_UPDATE = "...";
const USER_ID_TO_DELETE = "...";

console.log("✨ Uncomment methods to start interacting with the API!");

/*----*/
/* Uncomment this method to receive all members of your website */
// getMembers();
/*------*/

/*------*/
/* Uncomment this method to receive the member with the passed id. */
/* ✨ Don't forget to add a value for USER_ID  */
// getMember()
/*------*/

/*------*/
/* Uncomment this method to add a member to your website. */
/* ✨ Don't forget to add a value for email, password, and a free plan id! */
// addMember()
/*------*/

/*------*/
/* Uncomment this method to update a member's data. */
/* ✨ Don't forget to add a value for USER_ID  */
// updateMember()
/*------*/

/*------*/
/* Uncomment this method to delete a member. */
//  ✨ Don't forget to add a value for USER_ID
// ⚠️ Careful: The user with this id will be permanently deleted! ⚠️
// deleteMember()
/*------*/

async function getMembers() {
  const res = await fetch("https://api.memberstack.com/v1/members", {
    headers: { "X-API-KEY": API_KEY },
  });

  const getMembersResponse = await res.json();
  console.log(getMembersResponse);
  return getMembersResponse;
}

async function getMember() {
  const res = await fetch(
    `https://api.memberstack.com/v1/members/${USER_ID_TO_FETCH}`,
    {
      headers: { "X-API-KEY": API_KEY },
    }
  );

  const getMemberResponse = await res.json();
  console.log(getMemberResponse);
  return getMemberResponse;
}

async function addMember() {
  const res = await fetch("https://api.memberstack.com/v1/members", {
    method: "POST",
    headers: {
      "X-API-KEY": API_KEY,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: "...",
      password: "...",
      plan: FREE_PLAN_ID,
    }),
  });

  const addMemberResponse = await res.json();
  console.log(addMemberResponse);
  return addMemberResponse;
}

async function updateMember() {
  const res = await fetch(
    `https://api.memberstack.com/v1/members/${USER_ID_TO_UPDATE}`,
    {
      method: "POST",
      headers: { "X-API-KEY": API_KEY },
      body: { email: "..." },
    }
  );

  const updateMemberResponse = await res.json();
  console.log(updateMemberResponse);
  return updateMemberResponse;
}

async function deleteMember() {
  const res = await fetch(
    `https://api.memberstack.com/v1/members/${USER_ID_TO_DELETE}`,
    {
      method: "DELETE",
      headers: { "X-API-KEY": API_KEY },
    }
  );

  const deleteMemberResponse = await res.json();
  console.log(deleteMemberResponse);
  return deleteMemberResponse;
}
