import React, { Component } from 'react';

class Personas extends Component {
  render() {
    return (
      <div>
        <h2>UX Research</h2>
          <header className="section-header">
            <h3>Personas</h3>
          </header>
          <section className="scroll">
            <table>
              <thead>
                <tr>
                  <th width="5%"><span>User Type</span></th>
                  <th width="25%"><span>Characteristics</span></th>
                  <th width="25%"><span>Behaviour</span></th>
                  <th width="25%"><span>Activities</span></th>
                  <th width="20%"><span>Touch Points</span></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><h4 className="red">Artist</h4></td>
                  <td>
                    The artist is the primary creative force in the whole music making process. Artists expect to concentrate on the music.
                    The act of creating the music is only a part in their overall lives, more of their time is spent promoting the music and 
                    playing live. Artists have managers that they employ to deal with people on their behalf. An artist will only have limited 
                    direct contact with their record company, usually at the point of delivering material for review at a writing or 
                    pre-production stage. + Promo activities (TV, radio, press) in conjunction with record co.?
                  </td>
                  <td>
                    <ul>
                      <li>Often away from home</li>
                      <li>Focussed on the creative side, not the business side of the industry</li>
                      <li>Expects interaction with UMG systems to be light-touch, simple and appropriate to their specific needs</li>
                      <li>Uses portable devices on public networks</li>
                      <li>Mainly pushes stuff to UMG, not expecting to access anything – royalty statements?</li>
                    </ul>
                  </td>
                  <td>
                    <ul>
                      <li>Writing songs.</li>
                      <li>Recording demos</li>
                      <li>Recording tracks</li>
                      <li>Sequencing tracks for releases</li>
                      <li>Approving mixes and mastering</li>
                      <li>Promotional Video performance</li>
                      <li>Artwork and Label Credit sign-off</li>
                      <li>Merch’ sign-off</li>
                      <li>Live performances</li>
                      <li>Promotional activity</li>
                    </ul>
                  </td>
                  <td>
                    <ul>
                      <li>CW (WH2 – Approvals)</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td><h4 className="red">Artist’s Manager</h4></td>
                    <td>
                      An artist’s manager is there to interpret the aspirations of the artist, and then attempt to realise 
                      them through partnerships with other companies. The manager will negotiate deals and contracts, with the assistance 
                      of the artist’s lawyers. The artist’s manager acts as a buffer between the artist and the other companies.
                      A good manager will use their experience to advise their client, and influence their partner companies.
                      They will facilitate communication between the artist and the record company.
                    </td>
                    <td>
                      <ul>
                        <li>Fiercely protective of their clients</li>
                        <li>Very busy</li>
                        <li>Often on the move, using portable devices</li>
                        <li>Interested in the details</li>
                        <li>Business (rather than creatively) orientated, expects an audit trail where appropriate, when dealing with UMG</li>
                      </ul>
                    </td>
                    <td>
                      <ul>
                        <li>Managing the deal and contract negotiations</li>
                        <li>Managing com’s between the artist and other companies</li>
                        <li>Advising the artist on most business affairs</li>
                        <li>Managing relationships with the artist’s contracted parties (tour crew, retained musicians, agents, press etc)</li>
                        <li>Artist’s financial arrangements</li>
                      </ul>
                    </td>
                    <td>
                      <ul>
                        <li>CW (WH2 – Approvals)</li>
                      </ul>
                    </td>
                </tr>
                <tr>
                  <td><h4 className="red">A&R Manager</h4></td>
                    <td>
                      A&R managers are on the frontline for discovering and nurturing artists.
                      Their main job is forming, and maintaining strong relationships with the artists and their management.
                      Consequently a lot of their communication tends to be less formal, and more spontaneous.
                      They engage with the creative process by helping form partnerships with their artists and selected producers/mixers.
                      A&R managers have the final word when approving delivered music.
                    </td>
                    <td>
                      <ul>
                        <li>Not always interested in IT technology</li>
                        <li>Often away from base</li>
                        <li>Traditionally likes face-to-face, or phone interactions – focussed on rapport and relationships</li>
                        <li>Wants instant notification and access to new content when it arrives</li>
                        <li>Needs to listen to music (critically) on the move, as well as in the office and at home</li>
                      </ul>
                    </td>
                    <td>
                      <ul>
                        <li>Discovering new talent</li>
                        <li>Negotiating contracts (alongside BA) with artists</li>
                        <li>Creative direction</li>
                        <li>Com’s with the artist and their management</li>
                        <li>Matching artists with producers/mixers etc</li>
                        <li>Creative approval of recordings, mixes and masters</li>
                        <li>Suggest creative partnerships, e.g. featured artists</li>
                      </ul>
                    </td>
                    <td>
                      <ul>
                        <li>CW (WH2 – Approvals)</li>
                        <li>Research</li>
                        <li>WH2 – Sound Recordings</li>
                        <li>WH2 – Commissions</li>
                      </ul>
                    </td>
                </tr>
                <tr>
                  <td><h4 className="red">A&R Admin/Coord</h4></td>
                    <td>
                      The admin and coordination jobs in A&R deal with the practical details of the creative process.
                      Travel accommodation and studio bookings etc.
                      They deal with the logistics surrounding the studio processes, making sure that disc and tapes get to and from production partners, and artists.
                      They make sure that audio is distributed to the correct people for review and approval.
                      Traditional A&R admin role, vs. more technical management of audio assets.
                    </td>
                    <td>
                      <ul>
                        <li>Mostly based in the office</li>
                        <li>Has access to corporate network and a PC with a proper monitor</li>
                        <li>Dealing with a lot of detailed information about the commissions, and the files that come back</li>
                        <li>Handle a lot of information from multiple sources, in multiple formats</li>
                        <li>Dealing with multiple artists/projects/commissions simultaneously</li>
                        <li>Security of information is essential</li>
                      </ul>
                    </td>
                    <td>
                      <ul>
                        <li>Book Studios</li>
                        <li>Peripheral bookings and logistics related to studio bookings (transport, rentals, accommodation etc)</li>
                        <li>Preparation of initial agreements and outline contracts for Production Partners</li>
                        <li>Manage delivery of source assets and collection of deliverables</li>
                        <li>Collect and manage label copy information</li>
                        <li>Manage delivered files, consolidate drives, manage preparation for archiving</li>
                        <li>Manage collection of contributor contracts or agreements</li>
                        <li>Consolidate contributor and sample information</li>
                      </ul>
                    </td>
                    <td>
                      <ul>
                        <li>CW (WH2 – Approvals)</li>
                        <li>Research</li>
                        <li>WH2 – Artists</li>
                        <li>WH2 - Projects</li>
                        <li>WH2 – Sound Recordings</li>
                        <li>WH2 – Commissions</li>
                      </ul>
                    </td>
                </tr>
                <tr>
                  <td><h4 className="red">Marketing Manager</h4></td>
                    <td>
                      Responsible for artist presence in the market place. Works with other teams in Label (e.g. A&R, press, digital marketing, promo, commercial) 
                      and acts as the hub for strategy and execution of marketing of artist and their products.  
                      Domestic focus, International teams cover outside of home territory.
                      Defines creative brief and artist image (in conjunction with artist & artist manager). 
                      Mix of creative and commercial elements, to role  e.g. artwork sign-off vs pricing decisions
                      Distinguish between frontline and catalogue marketing?
                    </td>
                    <td>
                      <ul>
                        <li>Based in office</li>
                        <li>Has access to corporate network and a PC with a proper monitor (albeit small)</li>
                        <li>Deals with multiple artists/projects simultaneously, with the focus on artists with active releases</li>
                        <li>Data entry/systems admin will be delegated to marketing assistant</li>
                      </ul>
                    </td>
                    <td>
                      <ul>
                        <li>Pull together (in conjunction with other teams) the Launch/Marketing plan/campaigns for artist</li>
                        <li>Define products to be released, working with Commercial teams</li>
                        <li>Sign off artwork, videos  & website (in conjunction with artist/artist management)</li>
                      </ul>
                    </td>
                    <td>
                      <ul>
                        <li>N/A</li>
                      </ul>
                    </td>
                </tr>
                <tr>
                  <td><h4 className="red">PP - Producer</h4></td>
                    <td>
                      The Producer assumes overall control of a recording session.
                      They are chosen for their ability to mould the sound of an artist’s output, through a combination of studio trickery, 
                      musicality, direction and encouragement. The producer will normally choose the studio and the engineer that they work with 
                      (often their own facility). If the producer considers that extra parts are required - that cannot be performed by the artist 
                      and their regular contributors - then they will engage other musicians and arrangers to work on the recording. The producer 
                      takes responsibility for keeping records for what contributions are included in a recording.
                      The producer has to make judgement calls about whether to use samples or not, or whether to have them re-played.
                      The producer’s contribution is usually considered as a performance, and as such it attracts rights from agencies such as the PPL.

                    </td>
                    <td>
                      <ul>
                        <li>Based in a recording studio</li>
                        <li>Network access via public internet</li>
                        <li>May have access to more secure delivery networks in larger studios</li>
                        <li>Machine used for network access will not be the main machine in the studio, more likely to be the producer’s own iPad or laptop</li>
                        <li>Dealing with admin jobs such as collecting contributor details is seen as an unnecessary distraction, despite being a contractual obligation</li>
                        <li>Needs a slick and simple portal for entering ‘admin’ details</li>
                        <li>Needs a simple interface for uploading file – similar to Yousendit or Dropbox</li>
                        <li>Uploading of files is often done at the end of a long busy day – it needs to be robust enough to be left to run without constant monitoring</li>
                        <li>Producers may delegate the ‘housekeeping’, including gathering information, to their engineer</li>
                      </ul>
                    </td>
                    <td>
                      <ul>
                        <li>Choose recording studio(s)</li>
                        <li>Engage session musicians and arrangers</li>
                        <li>Engage Studio Recording engineer and other technical staff if required</li>
                        <li>Collect information about the contributors, including paperwork such as MU forms</li>
                        <li>Supply the contributor information to UMG</li>
                        <li>Supply details of any samples that have been used to UMG</li>
                        <li>Manage the recording process, ensuring that the process is completed in a timely fashion</li>
                        <li>Provide creative direction to the artist and other contributors during the recording process</li>
                        <li>Deliver rough mixes to the A&R manager for approval</li>
                        <li>Deliver a complete set of files and/or tapes, and other documents that make up the full recording session</li>
                      </ul>
                    </td>
                    <td>
                      <ul>
                        <li>CW (WH2 – Approvals)</li>
                        <li>CW (WH2 – Commissions)</li>
                      </ul>
                    </td>
                </tr>
                <tr>
                  <td><h4 className="red">PP - Mix Engineer</h4></td>
                    <td>
                    Some Producers mix their own recordings, but in some cases they pass the baton onto a specialist Mix Engineer (mixer).  
                    A mixer is a studio engineer that has a particular talent for taking all the constituent parts of a recording (all the 
                    separate instruments and vocal tracks) and then, by adding some magical fairy dust, balances everything out into a coherent 
                    musical experience (while maintaining the producer’s original vision). Mixers, like producers, can be considered ‘hot’ in a 
                    particular genre, usually based on recent success. ‘Hot’ mixers and producers are in big demand, and can be treated 
                    like stars themselves. Some mixers are engaged to produce an alternative to the main ‘album’ or ‘single’ mix.  
                    This re-mix is expected to be quite different (based on their own interpretation) and often contains quite a lot of 
                    different sounds (can be different ‘instruments’, loops, or samples).
                    </td>
                    <td>
                      <ul>
                        <li>Based in a recording studio</li>
                        <li>Network access via public internet</li>
                        <li>May have access to more secure delivery networks in larger studios</li>
                        <li>Machine used for network access will not be the main machine in the studio, more likely to be the mixer’s own iPad or laptop</li>
                        <li>Needs a slick and simple portal for entering ‘admin’ details</li>
                        <li>Needs a simple interface for uploading file – similar to Yousendit or Dropbox</li>
                        <li>Uploading of files is often done at the end of a long busy day – it needs to be robust enough to be left to run without constant monitoring</li>
                        <li>Mixers are often a onemanband operation, they have to do their own housekeeping and admin</li>
                        <li>Mixers have less contributor and sample information to deal with</li>
                        <li>The files that they deliver are high value finished assets that require high levels of security</li>
                      </ul>
                    </td>
                    <td>
                      <ul>
                        <li>Choose mixing facility</li>
                        <li>Inform UMG of any changes to the contributor information</li>
                        <li>Supply details of any samples that have been mixed in or out to UMG</li>
                        <li>Deliver mixes to the A&R manager for approval</li>
                        <li>Deliver final approved Mix Master files and/or tapes, including any variants of the main mix that have been requested in the mix commission</li>
                      </ul>
                    </td>
                    <td>
                      <ul>
                        <li>CW (WH2 – Commissions)</li>
                      </ul>
                    </td>
                </tr>
                <tr>
                  <td><h4 className="red">PP - Mastering Facility</h4></td>
                    <td>
                      The mastering process attracts engineers that are more focussed on detail and overall sonic accuracy.
                      Mastering engineers do have some creative input, but this is only in respect of the general ‘sound’ of 
                      the finished product. The files that they return are the finished production parts, so a mastering engineer 
                      needs to be reliable and consistent by nature. Mastering engineers are described as having ‘golden ears’ 
                      by virtue of their ability to distinguish between subtle variations of tone and timbre, and also a capacity 
                      to identify most faults and problems with audio content.
                    </td>
                    <td>
                      <ul>
                        <li>Have a more analytical and rigorous approach to audio engineering</li>
                        <li>Probably used to working with file based media</li>
                        <li>May already have bespoke systems in place for file download and upload</li>
                        <li>Tends to be a relatively small pool of production partners</li>
                        <li>Definitely fixed to one studio location (mastering engineers have their own ‘rooms’)</li>
                        <li>The mastering process generates only a tiny amount of extra metadata</li>
                        <li>Produces a very clearly defined set of deliverables (files and folders for digital, physical discs for vinyl)</li>
                      </ul>
                    </td>
                    <td>
                      <ul>
                        <li>Pre-mastering of assets – the process of modifying the tone and dynamics of the audio to create a coherent set of tracks on a product</li>
                        <li>Delivery of pre-mastered assets for approval</li>
                        <li>Creation of production parts from the mastered assets</li>
                        <li>Delivery of the production parts for approval and sign-off</li>
                        <li>Delivery of supporting documentation</li>
                        <li>Contributor information supplied to UMG (Mastering Room and Engineer)</li>
                      </ul>
                    </td>
                    <td>
                      <ul>
                        <li>CW (WH2 – Approvals)</li>
                        <li>CW (WH2 – Download/Upload)</li>
                        <li>CW (WH2 – Commissions)</li>
                      </ul>
                    </td>
                </tr>
                <tr>
                  <td><h4 className="red">PP - Transfer Facility Engineer</h4></td>
                    <td>
                      Transfer engineers need to have ‘Golden Ears’.
                      Transfer engineers need a set of audio engineering skills that work across the analogue and digital domains.
                      Dedication to the highest audio fidelity and reproduction is their primary concern.
                      The goal of a transfer engineer is to copy the audio from one medium to another in the best possible quality, 
                      without any processing or modification.  This process is referred to as a ‘Flat Transfer’.
                    </td>
                    <td>
                      <ul>
                        <li>Have an analytical and rigorous approach to audio engineering</li>
                        <li>Probably used to working with file based media</li>
                        <li>Tends to be a small pool of production partners – mostly internal staff</li>
                        <li>The systems used for file upload are not the same systems used in the studio for the audio transfer</li>
                        <li>Internal staff will be connected to the corporate network</li>
                      </ul>
                    </td>
                    <td>
                      <ul>
                        <li>Collection and delivery of source media from/to the Archive department</li>
                        <li>High quality transfer of audio from archive medium to a high definition digital format</li>
                        <li>Upload of the HD audio files into mass storage systems</li>
                        <li>Capture and upload of detailed technical information relating to the transfer process</li>
                        <li>Evaluation of the source medium, and capture of evaluation notes</li>
                      </ul>
                    </td>
                    <td>
                      <ul>
                        <li>WH2 – Upload</li>
                        <li>WH2 – Commissions</li>
                        <li>WH2 – Sound Recordings</li>
                      </ul>
                    </td>
                </tr>
                <tr>
                  <td><h4 className="red">Archive Manager</h4></td>
                    <td>
                      The archive team are a mixture of librarians, logistics managers and tape detectives.
                      Tapes and other physical media are stored in remote locations by third party suppliers. 
                      The contents of these physical assets does not always match the database records, and 
                      so the archive managers have to make judgement calls about which media to retrieve based 
                      on an original request, in order to fulfil the requester’s intended requirements.
                      Archive managers need to draw on a lot of experience when deciding which extra assets to 
                      recall from the offsite storage (recalls cost money).
                      They also need a mixture of technical skills and experience when making judgements about 
                      the condition of the assets once they have them in their possession.  Baking tapes requires 
                      the archive managers to apply a combination of skill and alchemy to render the tapes useful, rather than ruined.
                    </td>
                    <td>
                      <ul>
                        <li>Archive managers are internal staff</li>
                        <li>They work across multiple systems when managing archive requests</li>
                        <li>They have access to the corporate network</li>
                        <li>	They are used to working with databases and organised data</li>
                      </ul>
                    </td>
                    <td>
                      <ul>
                        <li>Management of the extensive archive of physical assets (analogue and digital)</li>
                        <li>Delivery and retrieval of physical assets from secure storage</li>
                        <li>Management of the assets onsite</li>
                        <li>Taking scans of the tape boxes and other storage containers</li>
                        <li>Updating the tape details on the physical containers</li>
                        <li>Managing the databases that keep records of the assets</li>
                        <li>Evaluation of the physical media</li>
                        <li>Baking tapes in preparation for transfer</li>
                        <li>Keeping records of the baking history of tapes</li>
                      </ul>
                    </td>
                    <td>
                      <ul>
                        <li>WH2 – Commissions</li>
                        <li>WH2 – Sound Recordings</li>
                        <li>MMAS?</li>
                      </ul>
                    </td>
                </tr>
              </tbody>
            </table>
          </section>
      </div>
    );
  }
}

export default Personas;
